/**
 * Contact form handler for abdulmazood.netlify.app
 *
 * FIXES APPLIED TO THE ORIGINAL:
 *  1. Removed .setHeader() - TextOutput has no such method in Apps Script, so
 *     every response threw a TypeError, including the one in the catch block.
 *     CORS headers cannot be set this way; the deployment setting is what matters.
 *  2. Added doGet() so you can open the /exec URL in a browser and confirm the
 *     deployment is live and public.
 *  3. record_data now fails loudly if the sheet tab is missing, instead of
 *     silently swallowing it.
 */

var TO_ADDRESS = "machumzdofcl@gmail.com";

/** Open the /exec URL in a browser: this should render, proving public access. */
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ result: "ok", message: "Endpoint is live." }),
  ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    record_data(e);

    var mailData = e.parameters;
    var orderParameter = e.parameters.formDataNameOrder;
    var dataOrder = orderParameter ? JSON.parse(orderParameter) : undefined;

    var sendEmailTo =
      typeof TO_ADDRESS !== "undefined"
        ? TO_ADDRESS
        : mailData.formGoogleSendEmail;

    if (sendEmailTo) {
      MailApp.sendEmail({
        to: String(sendEmailTo),
        subject: "Portfolio contact form - " + (mailData.name || "no name"),
        replyTo: mailData.email ? String(mailData.email) : undefined,
        htmlBody: formatMailBody(mailData, dataOrder),
      });
    }

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log(error);
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: String(error) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function formatMailBody(obj, order) {
  var result = "";
  if (!order) order = Object.keys(obj);

  for (var idx in order) {
    var key = order[idx];
    if (
      key === "formDataNameOrder" ||
      key === "formGoogleSheetName" ||
      key === "honeypot"
    )
      continue;
    result +=
      "<h4 style='text-transform: capitalize; margin-bottom: 0'>" +
      key +
      "</h4>" +
      "<div>" +
      sanitizeInput(obj[key]) +
      "</div>";
  }
  return result;
}

function sanitizeInput(rawInput) {
  var placeholder = HtmlService.createHtmlOutput(" ");
  placeholder.appendUntrusted(rawInput);
  return placeholder.getContent();
}

function record_data(e) {
  var lock = LockService.getDocumentLock();
  lock.waitLock(30000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = e.parameters.formGoogleSheetName || "responses";
    var sheet = doc.getSheetByName(sheetName);

    // Fail loudly rather than silently dropping every submission.
    if (!sheet) {
      throw new Error(
        "No sheet tab named '" + sheetName + "'. Rename a tab to match.",
      );
    }

    var oldHeader = sheet
      .getRange(1, 1, 1, sheet.getLastColumn())
      .getValues()[0];
    var newHeader = oldHeader.slice();
    var fieldsFromForm = getDataColumns(e.parameters);
    var row = [new Date()];

    for (var i = 1; i < oldHeader.length; i++) {
      var field = oldHeader[i];
      row.push(getFieldFromData(field, e.parameters));
      var formIndex = fieldsFromForm.indexOf(field);
      if (formIndex > -1) fieldsFromForm.splice(formIndex, 1);
    }

    for (var j = 0; j < fieldsFromForm.length; j++) {
      var extra = fieldsFromForm[j];
      row.push(getFieldFromData(extra, e.parameters));
      newHeader.push(extra);
    }

    var nextRow = sheet.getLastRow() + 1;
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);

    if (newHeader.length > oldHeader.length) {
      sheet.getRange(1, 1, 1, newHeader.length).setValues([newHeader]);
    }
  } finally {
    lock.releaseLock();
  }
}

function getDataColumns(data) {
  return Object.keys(data).filter(function (column) {
    return !(
      column === "formDataNameOrder" ||
      column === "formGoogleSheetName" ||
      column === "formGoogleSendEmail" ||
      column === "honeypot"
    );
  });
}

function getFieldFromData(field, data) {
  var values = data[field] || "";
  return values.join ? values.join(", ") : values;
}
