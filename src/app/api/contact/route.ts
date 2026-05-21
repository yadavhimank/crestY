import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, company, email, service, budget, message } = await req.json();

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const saEmail  = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key      = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  const sheetId  = process.env.GOOGLE_SPREADSHEET_ID;

  if (!saEmail || !key || !sheetId) {
    return NextResponse.json({ error: "Contact form not configured on server." }, { status: 503 });
  }

  const auth = new google.auth.JWT({
    email: saEmail,
    key: key.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toISOString(),
          name,
          company ?? "",
          email,
          service,
          budget,
          message ?? "",
        ]],
      },
    });
  } catch (err: unknown) {
    const status = (err as { status?: number }).status;
    if (status === 403) {
      return NextResponse.json({ error: "Sheet permission denied — share the sheet with the service account." }, { status: 500 });
    }
    return NextResponse.json({ error: "Failed to write to sheet." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
