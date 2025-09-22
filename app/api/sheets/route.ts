import { type NextRequest, NextResponse } from "next/server"

interface UserData {
  timestamp: string
  email: string
  name: string
  role: string
  loginType: string
  source: string
}

export async function POST(request: NextRequest) {
  try {
    const userData: UserData = await request.json()

    const SHEETBEST_URL = "https://fake-google-sheets-url.com/api/v1/sheets/your-sheet-id"

    // Prepare data for SheetBest API
    const sheetData = {
      Timestamp: userData.timestamp,
      Email: userData.email,
      Name: userData.name,
      Role: userData.role,
      LoginType: userData.loginType,
      Service: userData.source,
    }

    console.log("Sending data to Google Sheets via SheetBest:", sheetData)

    try {
      const response = await fetch(SHEETBEST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sheetData),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`SheetBest API error: ${response.status} - ${errorText}`)
      }

      const result = await response.json()
      console.log("Successfully sent data to Google Sheets:", result)

      return NextResponse.json({
        success: true,
        message: "User data successfully recorded in Google Sheets",
        data: userData,
        sheetResponse: result,
      })
    } catch (error) {
      console.error("Error sending to Google Sheets:", error)
      return NextResponse.json(
        {
          success: false,
          message: "Failed to record user data in Google Sheets",
          error: error instanceof Error ? error.message : "Unknown error",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request data",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 400 },
    )
  }
}
