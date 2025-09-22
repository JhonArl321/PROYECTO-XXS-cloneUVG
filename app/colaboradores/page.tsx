import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ColaboradoresPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="bg-gray-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex space-x-6">
            <Link href="/estudiantes" className="hover:text-green-400 transition-colors">
              ESTUDIANTES
            </Link>
            <Link href="/colaboradores" className="text-green-400 font-semibold">
              COLABORADORES
            </Link>
            <Link href="/egresados" className="hover:text-green-400 transition-colors">
              EGRESADOS
            </Link>
            <Link href="/donantes" className="hover:text-green-400 transition-colors">
              DONANTES
            </Link>
            <Link href="/padres" className="hover:text-green-400 transition-colors">
              PADRES
            </Link>
          </div>
          <div className="flex space-x-4">
            <span>🌐</span>
            <span>📧</span>
            <span>📱</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
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

          <nav className="hidden md:flex space-x-8">
            <Link href="/nosotros" className="text-gray-700 hover:text-green-600 font-medium">
              NOSOTROS
            </Link>
            <Link href="/aspirantes" className="text-gray-700 hover:text-green-600 font-medium">
              ASPIRANTES
            </Link>
            <Link href="/academico" className="text-gray-700 hover:text-green-600 font-medium">
              ACADÉMICO
            </Link>
            <Link href="/vida-estudiantil" className="text-gray-700 hover:text-green-600 font-medium">
              VIDA ESTUDIANTIL
            </Link>
            <Link href="/impacto" className="text-gray-700 hover:text-green-600 font-medium">
              IMPACTO
            </Link>
            <Link href="/investigacion" className="text-gray-700 hover:text-green-600 font-medium">
              INVESTIGACIÓN
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-green-600 font-medium">
              SERVICIOS
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Portal de Colaboradores</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
            Accede a las herramientas y recursos necesarios para tu trabajo académico y administrativo en la Universidad
            del Valle de Guatemala.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Canvas LMS Card */}
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-700">Canvas LMS</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Gestiona tus cursos, calificaciones, contenido académico y comunicación con estudiantes.
                </p>
                <Link href="/auth/canvas?role=collaborator">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    Acceder a Canvas
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* HR Services */}
            <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-700">Recursos Humanos</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Consulta información de nómina, beneficios, permisos y desarrollo profesional.
                </p>
                <Link href="/auth/service?role=collaborator&service=hr-services">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    Ver Servicios
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Academic Management */}
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-purple-700">Gestión Académica</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Herramientas para planificación académica, reportes y administración de programas.
                </p>
                <Link href="/auth/service?role=collaborator&service=academic-management">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                    Acceder
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Herramientas y Recursos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/auth/service?role=collaborator&service=email"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Correo Institucional</h3>
              <p className="text-sm text-gray-600">Acceso a tu cuenta de email UVG</p>
            </Link>
            <Link
              href="/auth/service?role=collaborator&service=biblioteca-docente"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Biblioteca Digital</h3>
              <p className="text-sm text-gray-600">Recursos académicos y de investigación</p>
            </Link>
            <Link
              href="/auth/service?role=collaborator&service=desarrollo"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Desarrollo Docente</h3>
              <p className="text-sm text-gray-600">Capacitaciones y formación continua</p>
            </Link>
            <Link
              href="/auth/service?role=collaborator&service=soporte"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Soporte Técnico</h3>
              <p className="text-sm text-gray-600">Ayuda con sistemas y tecnología</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Comunicados Importantes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Actualización de Políticas Académicas</CardTitle>
                <p className="text-sm text-gray-500">15 de Noviembre, 2024</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Se han actualizado las políticas de evaluación y calificación para el próximo semestre. Revisa los
                  cambios en el manual docente.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Capacitación en Nuevas Tecnologías</CardTitle>
                <p className="text-sm text-gray-500">10 de Noviembre, 2024</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Inscríbete en los talleres de herramientas digitales para la enseñanza. Fechas disponibles en el
                  portal de desarrollo docente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold text-sm">
                  UVG
                </div>
                <div className="text-xs">
                  <div className="font-semibold">UNIVERSIDAD</div>
                  <div>DEL VALLE DE GUATEMALA</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">SOPORTE DOCENTE</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Mesa de Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Manuales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Capacitaciones
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">RECURSOS</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Biblioteca
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Investigación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Publicaciones
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">CONTACTO</h4>
              <ul className="space-y-2 text-sm">
                <li>18 Avenida 11-95 Zona 15</li>
                <li>Vista Hermosa III, Guatemala</li>
                <li>Tel: (502) 2507-1500</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
