/**
 * SmartCore contact form receiver (Google Apps Script web app).
 *
 * What it does for every enquiry from smartcoretech.co.uk:
 *   1. Appends a row to the "Enquiries" sheet of the spreadsheet this script is bound to.
 *   2. Emails the enquiry to the Google account that deployed the script
 *      (or to NOTIFY_EMAIL if you set it in Project Settings → Script properties).
 *
 * Setup:
 *   1. Create a Google Sheet → Extensions → Apps Script → paste this file.
 *   2. Deploy → New deployment → Web app. Execute as: Me. Who has access: Anyone.
 *   3. Copy the web app URL (ends with /exec) into Vercel → sc-tech → Settings →
 *      Environment Variables → CONTACT_WEBHOOK_URL (Production), then redeploy.
 *   4. Optional: Script properties → NOTIFY_EMAIL = address to notify.
 */

var SHEET_NAME = "Enquiries";
var FIELDS = [
  "submittedAt", "interest", "name", "email", "company", "message",
  "pageUrl", "referrer", "utmSource", "utmMedium", "utmCampaign", "utmTerm", "utmContent",
];

function doPost(e) {
  var data = {};
  try {
    data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
  } catch (err) {
    return respond({ ok: false, error: "Invalid JSON" });
  }
  return handleEnquiry(data);
}

// Kept for compatibility with GET requests that pass fields as query parameters.
function doGet(e) {
  return handleEnquiry((e && e.parameter) || {});
}

function handleEnquiry(data) {
  if (!data.email || !data.message) {
    return respond({ ok: false, error: "Missing email or message" });
  }

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    saveRow(data);
  } finally {
    lock.releaseLock();
  }

  sendNotification(data);
  return respond({ ok: true });
}

function saveRow(data) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(FIELDS);
  }
  sheet.appendRow(FIELDS.map(function (field) {
    return String(data[field] || "").slice(0, 5000);
  }));
}

function sendNotification(data) {
  var recipient =
    PropertiesService.getScriptProperties().getProperty("NOTIFY_EMAIL") ||
    Session.getEffectiveUser().getEmail();

  var interestLabels = { automation: "Automate a workflow", leadership: "AI leadership", unsure: "Not sure yet" };
  var subject = "New enquiry: " + (interestLabels[data.interest] || "Website") + ", " + (data.name || data.email);
  var body = [
    "Interest: " + (interestLabels[data.interest] || data.interest || "-"),
    "Name: " + (data.name || "-"),
    "Email: " + (data.email || "-"),
    "Company: " + (data.company || "-"),
    "",
    data.message || "",
    "",
    "Page: " + (data.pageUrl || "-"),
    "Referrer: " + (data.referrer || "-"),
    "UTM: " + [data.utmSource, data.utmMedium, data.utmCampaign].filter(String).join(" / "),
  ].join("\n");

  MailApp.sendEmail({ to: recipient, subject: subject, body: body, replyTo: data.email });
}

function respond(result) {
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}
