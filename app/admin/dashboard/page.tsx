"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, ExternalLink, Download } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const handleOpenGoogleSheets = () => {
    window.open(
      "https://docs.google.com/spreadsheets/d/1jRc8nvK2LmRX7QogyTuwc_17DZaLUnkaSSx3XzWFaj8/edit?usp=sharing",
      "_blank",
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center text-white font-bold">
              UVG
            </div>
            <div className="text-sm text-gray-600">
              <div className="font-semibold">UNIVERSIDAD</div>
              <div>DEL VALLE DE GUATEMALA</div>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Panel de Administración</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accesos Hoy</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+12% desde ayer</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Estudiantes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">Registros únicos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Colaboradores</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">43</div>
              <p className="text-xs text-muted-foreground">Docentes y staff</p>
            </CardContent>
          </Card>
        </div>

        {/* Google Sheets Integration */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ExternalLink className="w-5 h-5" />
              <span>Registro de Accesos - Google Sheets</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Todos los accesos a Canvas se registran automáticamente en la hoja de cálculo de Google Sheets para
              auditoría y seguimiento.
            </p>

            <div className="flex space-x-4">
              <Button onClick={handleOpenGoogleSheets} className="bg-green-600 hover:bg-green-700">
                <ExternalLink className="w-4 h-4 mr-2" />
                Abrir Google Sheets
              </Button>

              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Exportar Datos
              </Button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Información de la Hoja de Cálculo</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>
                  • <strong>Columnas:</strong> Timestamp, Email, Nombre, Rol, Tipo de Login, Fuente
                </li>
                <li>
                  • <strong>Actualización:</strong> Tiempo real con cada acceso
                </li>
                <li>
                  • <strong>Acceso:</strong> Solo administradores autorizados
                </li>
                <li>
                  • <strong>Retención:</strong> Datos guardados permanentemente para auditoría
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">maria.garcia@uvg.edu.gt</p>
                  <p className="text-xs text-gray-500">Estudiante - Acceso a Canvas - Hace 5 minutos</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">prof.rodriguez@uvg.edu.gt</p>
                  <p className="text-xs text-gray-500">Colaborador - Acceso a Canvas - Hace 12 minutos</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">carlos.lopez@uvg.edu.gt</p>
                  <p className="text-xs text-gray-500">Estudiante - Acceso a Canvas - Hace 18 minutos</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
