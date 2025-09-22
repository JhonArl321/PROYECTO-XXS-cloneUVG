// Google Sheets integration utilities

export interface UserAuthData {
  timestamp: string
  email: string
  name: string
  role: string
  loginType: string
  source: string // This now represents the service accessed
}

export async function sendUserDataToSheets(userData: UserAuthData): Promise<boolean> {
  try {
    const response = await fetch("/api/sheets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || "Failed to send data to sheets")
    }

    console.log("Data successfully sent to Google Sheets:", result)
    return true
  } catch (error) {
    console.error("Error sending data to Google Sheets:", error)
    return false
  }
}

// Google Apps Script code that should be deployed as a web app
// This code should be added to Google Apps Script and deployed as a web app
export const GOOGLE_APPS_SCRIPT_CODE = `
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('1jRc8nvK2LmRX7QogyTuwc_17DZaLUnkaSSx3XzWFaj8').getActiveSheet();
    
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    const email = e.parameter.email || '';
    const name = e.parameter.name || '';
    const role = e.parameter.role || '';
    const loginType = e.parameter.loginType || '';
    const source = e.parameter.source || '';
    
    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Email', 'Name', 'Role', 'Login Type', 'Source']);
    }
    
    // Add user data
    sheet.appendRow([timestamp, email, name, role, loginType, source]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data added successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({message: 'UVG Authentication Logger is running'}))
    .setMimeType(ContentService.MimeType.JSON);
}
`
