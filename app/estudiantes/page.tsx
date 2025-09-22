import Link from "next/link"

export default function EstudiantesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="bg-gray-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex space-x-6">
            <Link href="/estudiantes" className="text-green-400 font-semibold">
              ESTUDIANTES
            </Link>
            <Link href="/colaboradores" className="hover:text-green-400 transition-colors">
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
      <section className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Portal de Estudiantes</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
            Accede a todos los recursos académicos, servicios estudiantiles y herramientas digitales que necesitas para
            tu éxito universitario.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Row 1 */}
            <Link href="/auth/service?role=student&service=instituto-tecnologico" className="group">
              <div className="bg-gray-800 hover:bg-gray-700 transition-colors p-8 text-center">
                <h3 className="text-white font-bold text-lg mb-2">INSTITUTO TECNOLÓGICO</h3>
                <p className="text-gray-300 text-sm">Instituto Tecnológico</p>
              </div>
            </Link>

            <Link href="/auth/service?role=student&service=educacion" className="group">
              <div className="bg-gray-800 hover:bg-gray-700 transition-colors p-8 text-center">
                <h3 className="text-white font-bold text-lg mb-2">EDUCACIÓN</h3>
                <p className="text-gray-300 text-sm">Facultad de Educación</p>
              </div>
            </Link>

            <Link href="/auth/service?role=student&service=ingenieria" className="group">
              <div className="bg-gray-800 hover:bg-gray-700 transition-colors p-8 text-center">
                <h3 className="text-white font-bold text-lg mb-2">INGENIERÍA</h3>
                <p className="text-gray-300 text-sm">Facultad de Ingeniería</p>
              </div>
            </Link>

            <Link href="/auth/service?role=student&service=ciencias-humanidades" className="group">
              <div className="bg-gray-800 hover:bg-gray-700 transition-colors p-8 text-center">
                <h3 className="text-white font-bold text-lg mb-2">CIENCIAS Y HUMANIDADES</h3>
                <p className="text-gray-300 text-sm">Ciencias y humanidades</p>
              </div>
            </Link>

            {/* Row 2 */}
            <Link href="/auth/service?role=student&service=ayudas-financieras" className="group">
              <div className="bg-gray-800 hover:bg-gray-700 transition-colors p-8 text-center">
                <h3 className="text-white font-bold text-lg mb-2">AYUDAS FINANCIERAS</h3>
                <p className="text-gray-300 text-sm">Ayuda Financiera</p>
              </div>
            </Link>

            <Link href="/auth/service?role=student&service=correo" className="group">
              <div className="bg-gray-800 hover:bg-gray-700 transition-colors p-8 text-center">
                <h3 className="text-white font-bold text-lg mb-2">
                  CORREO <span className="text-green-400">UVG</span>
                </h3>
                <p className="text-gray-300 text-sm">Correo Electrónico</p>
              </div>
            </Link>

            <Link href="/auth/canvas?role=student" className="group">
              <div className="bg-gray-800 hover:bg-gray-700 transition-colors p-8 text-center">
                <h3 className="text-white font-bold text-lg mb-2">
                  INGRESO A <span className="text-red-400">CANVAS</span>
                </h3>
                <p className="text-gray-300 text-sm">Ingresar a Canvas</p>
              </div>
            </Link>

            <Link href="/auth/service?role=student&service=portal" className="group">
              <div className="bg-gray-800 hover:bg-gray-700 transition-colors p-8 text-center">
                <h3 className="text-white font-bold text-lg mb-2">
                  PORTAL <span className="text-green-400">UVG</span>
                </h3>
                <p className="text-gray-300 text-sm">Portal Electrónico</p>
              </div>
            </Link>
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
              <h4 className="font-bold mb-4">SOPORTE ESTUDIANTIL</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Mesa de Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Tutoriales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">SERVICIOS</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Biblioteca
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Laboratorios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Campus Virtual
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
