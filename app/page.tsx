"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (section: string) => {
    setActiveDropdown(activeDropdown === section ? null : section)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header - Dark Gray Background */}
      <header className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col space-y-3 lg:space-y-0">
            {/* Logo Section - Always at top */}
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <div className="text-white">
                <div className="text-2xl lg:text-3xl font-bold">UVG</div>
              </div>
              <div className="text-white text-xs lg:text-sm">
                <div className="font-semibold">UNIVERSIDAD</div>
                <div>DEL VALLE</div>
                <div>DE GUATEMALA</div>
              </div>
            </div>

            {/* Navigation Menu - Second on mobile */}
            <div className="flex justify-center lg:justify-end">
              <div className="flex flex-wrap justify-center lg:justify-end space-x-0 text-xs">
                <button
                  onClick={() => handleDropdownToggle("estudiantes")}
                  className="bg-transparent hover:bg-gray-700 text-white font-normal px-1 py-1 text-xs border-r border-gray-600 rounded-none"
                >
                  ESTUDIANTES
                </button>

                <button
                  onClick={() => handleDropdownToggle("colaboradores")}
                  className="bg-transparent hover:bg-gray-700 text-white font-normal px-1 py-1 text-xs border-r border-gray-600 rounded-none"
                >
                  COLABORADORES
                </button>

                <button
                  onClick={() => handleDropdownToggle("egresados")}
                  className="bg-transparent hover:bg-gray-700 text-white font-normal px-1 py-1 text-xs border-r border-gray-600 rounded-none"
                >
                  EGRESADOS
                </button>

                <button
                  onClick={() => handleDropdownToggle("donantes")}
                  className="bg-transparent hover:bg-gray-700 text-white font-normal px-1 py-1 text-xs border-r border-gray-600 rounded-none"
                >
                  DONANTES
                </button>

                <button
                  onClick={() => handleDropdownToggle("padres")}
                  className="bg-transparent hover:bg-gray-700 text-white font-normal px-1 py-1 text-xs rounded-none"
                >
                  PADRES
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Search and Action Buttons */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:justify-end lg:items-center">
              {/* Search Box - Third on mobile */}
              <div className="flex justify-center lg:justify-end">
                <div className="flex items-center space-x-1">
                  <div className="flex items-center bg-white rounded px-2 py-1">
                    <input
                      type="text"
                      placeholder="OPTIMIZADO POR"
                      className="text-xs text-gray-600 bg-transparent border-none outline-none w-20 sm:w-28"
                    />
                    <span className="text-xs text-gray-600 font-bold ml-1">Google</span>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 text-xs font-bold rounded flex items-center justify-center">
                    <svg
                      className="w-3 h-3 lg:w-4 lg:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons - Fourth on mobile */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4 lg:ml-4">
                <span className="text-white font-bold text-xs lg:text-sm text-center">
                  TRABAJAREN<span className="text-green-400">UVG</span>
                </span>
                <span className="text-white font-bold text-xs lg:text-sm text-center">
                  APLICA<span className="text-green-400">AQUÍ</span>
                </span>
                <span className="text-white font-bold text-xs lg:text-sm text-center">
                  ACTUALIDAD<span className="text-green-400">UVG</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {activeDropdown === "estudiantes" && (
        <div className="w-full bg-gray-800 text-white border-t border-gray-600 transition-all duration-300 ease-in-out">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeDropdown}
              className="text-white hover:text-gray-300 text-sm font-medium flex items-center space-x-2"
            >
              <span>Cerrar</span>
              <span className="text-lg">×</span>
            </button>
          </div>

          <div className="px-4 pb-8 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* ACCESO A PORTALES */}
                <div>
                  <h3 className="font-bold text-white mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wide">
                    ACCESO A PORTALES
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <a
                      href="/auth/service?role=student&service=correo"
                      className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline"
                    >
                      Correo UVG
                    </a>
                    <a
                      href="/auth/canvas"
                      className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline"
                    >
                      Canvas
                    </a>
                    <a
                      href="/auth/service?role=student&service=portal"
                      className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline"
                    >
                      Acceso a portal electrónico
                    </a>
                    <a
                      href="/auth/service?role=student&service=actualidad"
                      className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline"
                    >
                      Actualidad UVG
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Reglamentos UVG
                    </a>
                    <a
                      href="/auth/service?role=student&service=servicenow"
                      className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline"
                    >
                      Service Now
                    </a>
                  </div>
                </div>

                {/*LINKS DE INTERÉS */}
                <div>
                  <h3 className="font-bold text-white mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wide">
                    LINKS DE INTERÉS
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Valores
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Vida Estudiantil
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Relaciones internacionales
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Asociaciones y clubes
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      ENACTUS
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      CREA
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Directorio
                    </a>
                    <a
                      href="/auth/service?role=student&service=becas"
                      className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline"
                    >
                      Becas y ayudas financieras
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Calendario Académico
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Boletín informativo: Seguro para estudiantes 2025
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Información de parqueos segundo ciclo 2025
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Listado de Distinciones Académicas 2024
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Listado de graduandos 2025
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Check4Covid
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Requisito de Inglés
                    </a>
                  </div>
                </div>

                {/* SERVICIOS */}
                <div>
                  <h3 className="font-bold text-white mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wide">
                    SERVICIOS
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Unidad de Bienestar
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Centro Integral de Psicología Aplicada
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Nutri-Activa
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Programa de desarrollo de carrera
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Bibliotecas
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeDropdown === "colaboradores" && (
        <div className="w-full bg-gray-800 text-white border-t border-gray-600 relative z-40">
          <div className="max-w-7xl mx-auto px-4 py-8 relative">
            {/* Close button */}
            <button
              onClick={closeDropdown}
              className="absolute top-4 right-4 text-white hover:text-gray-300 flex items-center space-x-2 text-sm"
            >
              <span>Cerrar</span>
              <span className="text-xl">×</span>
            </button>

            {/* Four-column layout for COLABORADORES content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {/* ACCESO A PORTALES Column */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">ACCESO A PORTALES</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/auth/service?role=colaborador&service=portal"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Acceso a portal electrónico
                    </a>
                  </li>
                  <li>
                    <a href="/auth/canvas" className="text-gray-300 hover:text-white text-sm">
                      Canvas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Acceso a intranet
                    </a>
                  </li>
                  <li>
                    <a
                      href="/auth/service?role=colaborador&service=correo"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Correo UVG
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Evolution
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Centro de Documentación Institucional
                    </a>
                  </li>
                  <li>
                    <a
                      href="/auth/service?role=colaborador&service=actualidad"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Actualidad UVG
                    </a>
                  </li>
                  <li>
                    <a
                      href="/auth/service?role=colaborador&service=servicenow"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Service Now
                    </a>
                  </li>
                </ul>
              </div>

              {/*LINKS DE INTERÉS Column */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">LINKS DE INTERÉS</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Valores
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Press Kit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Trabaja en UVG
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Directorio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Lifelong Learning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Reglamentos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Check4Covid
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      UVG te espera
                    </a>
                  </li>
                </ul>
              </div>

              {/* SERVICIOS Column */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">SERVICIOS</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Unidad de Bienestar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Centro Integral de Psicología Aplicada
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Nutri-Activa
                    </a>
                  </li>
                  <li>
                    <a
                      href="/auth/service?role=colaborador&service=bibliotecas"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Bibliotecas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      Centro de Excelencia
                    </a>
                  </li>
                </ul>
              </div>

              {/* RECURSOS Column */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4">RECURSOS</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      DITA
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeDropdown === "egresados" && (
        <div className="w-full bg-gray-800 text-white border-t border-gray-600 transition-all duration-300 ease-in-out">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeDropdown}
              className="text-white hover:text-gray-300 text-sm font-medium flex items-center space-x-2"
            >
              <span>Cerrar</span>
              <span className="text-lg">×</span>
            </button>
          </div>

          <div className="px-4 pb-8 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="font-bold text-white mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wide">
                    ACCESO A PORTALES
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Actualidad UVG
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wide">
                    LINKS DE INTERÉS
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Tu Comunidad Alumni
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Únete a SoyUVG – Empleo y Networking
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Conecte con el Talento UVG
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Lifelong Learning
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Trabaja en UVG
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Validación de títulos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeDropdown === "padres" && (
        <div className="w-full bg-gray-800 text-white border-t border-gray-600 transition-all duration-300 ease-in-out">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeDropdown}
              className="text-white hover:text-gray-300 text-sm font-medium flex items-center space-x-2"
            >
              <span>Cerrar</span>
              <span className="text-lg">×</span>
            </button>
          </div>

          <div className="px-4 pb-8 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="font-bold text-white mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wide">
                    LINKS DE INTERÉS
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Proceso de admisión
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Becas y ayuda financiera
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Carreras
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      La mejor opción para el futuro de sus hijos
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Impacto
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      UVG te espera
                    </a>
                  </div>
                </div>

                <div>
                  <div className="space-y-2 md:space-y-3 mt-8 md:mt-12">
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Relaciones internacionales
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Unidad de Bienestar
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Acerca de UVG
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Preguntas Frecuentes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeDropdown === "donantes" && (
        <div className="w-full bg-gray-800 text-white border-t border-gray-600 transition-all duration-300 ease-in-out">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeDropdown}
              className="text-white hover:text-gray-300 text-sm font-medium flex items-center space-x-2"
            >
              <span>Cerrar</span>
              <span className="text-lg">×</span>
            </button>
          </div>

          <div className="px-4 pb-8 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="font-bold text-white mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wide">
                    DONANTES
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Cómo donar
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Proyectos Activos
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Becas y ayudas
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Infraestructura
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wide">
                    RECONOCIMIENTOS
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Dotantes Destacados
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Impacto de Donaciones
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wide">
                    TRANSPARENCIA
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Reportes Financieros
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white text-xs md:text-sm hover:underline">
                      Uso de Fondos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeDropdown &&
        activeDropdown !== "estudiantes" &&
        activeDropdown !== "colaboradores" &&
        activeDropdown !== "egresados" &&
        activeDropdown !== "padres" &&
        activeDropdown !== "donantes" && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closeDropdown}>
            <div className="bg-gray-100 w-full" style={{ height: "300px" }} onClick={(e) => e.stopPropagation()}>
              <div className="max-w-7xl mx-auto p-6 relative">
                {/* Close button */}
                <button
                  onClick={closeDropdown}
                  className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 flex items-center space-x-1"
                >
                  <span>CERRAR</span>
                  <span className="text-lg">×</span>
                </button>

                <div className="grid grid-cols-4 gap-6">
                  {/* MÁS INFORMACIÓN Section with Icon */}
                  <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center shadow-sm">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4">
                      <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[14px] border-b-white"></div>
                    </div>
                    <h3 className="font-bold text-gray-800 text-base mb-1">MÁS</h3>
                    <h3 className="font-bold text-gray-800 text-base">INFORMACIÓN</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Main Navigation Bar - Green Background */}
      <div className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 lg:space-x-8 text-sm font-bold">
              <a href="#" className="hover:text-green-200 whitespace-nowrap">
                NOSOTROS
              </a>
              <a href="#" className="hover:text-green-200 whitespace-nowrap">
                ADMISIONES
              </a>
              <a href="#" className="hover:text-green-200 whitespace-nowrap">
                ACADÉMICO
              </a>
              <a href="#" className="hover:text-green-200 whitespace-nowrap">
                VIDA ESTUDIANTIL
              </a>
              <a href="#" className="hover:text-green-200 whitespace-nowrap">
                IMPACTO
              </a>
              <a href="#" className="hover:text-green-200 whitespace-nowrap">
                INVESTIGACIÓN
              </a>
              <a href="#" className="hover:text-green-200 whitespace-nowrap">
                SERVICIOS
              </a>
            </div>

            <div className="flex justify-center lg:justify-end space-x-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-green-600 text-xs font-bold">f</span>
              </div>
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-green-600 text-xs font-bold">t</span>
              </div>
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-green-600 text-xs font-bold">yt</span>
              </div>
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-green-600 text-xs font-bold">ig</span>
              </div>
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-green-600 text-xs font-bold">in</span>
              </div>
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-green-600 text-xs font-bold">p</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ServiceNow Banner - replaces navigation menu */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 lg:py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
            <div className="flex items-center min-w-0 overflow-hidden">
              {/* Angled Green Section */}
              <div className="relative flex-shrink-0">
                <div
                  className="bg-green-700 h-10 w-12 sm:h-12 sm:w-16 lg:h-16 lg:w-20"
                  style={{
                    clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-start pl-1 lg:pl-2">
                  <div className="text-white font-bold text-xs sm:text-sm lg:text-lg">UVG</div>
                </div>
              </div>

              {/* University Text */}
              <div className="ml-2 lg:ml-4 text-gray-700 text-xs lg:text-sm leading-tight flex-shrink-0">
                <div className="font-semibold">UNIVERSIDAD</div>
                <div>DEL VALLE</div>
                <div>ALTIPLANO</div>
              </div>

              {/* Vertical Separator */}
              <div className="mx-2 sm:mx-3 lg:mx-6 h-6 sm:h-8 lg:h-12 w-px bg-gray-300 flex-shrink-0"></div>
            </div>

            {/* ServiceNow Branding */}
            <div className="flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
              <div className="bg-black text-white px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 font-bold text-sm sm:text-lg lg:text-xl">
                SN
              </div>
              <div className="text-black font-bold text-sm sm:text-lg lg:text-xl">SERVICE NOW</div>
            </div>

            <div className="w-full max-w-xs sm:max-w-sm lg:w-64 h-10 sm:h-12 lg:h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0">
              <Image
                src="/classroom-students-learning.png"
                alt="UVG Students in Classroom"
                width={256}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/university-students-in-laboratory-medical-setting.jpg"
            alt="UVG Students"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-24 flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-lg lg:text-xl">+</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                FERIA DE
                <br />
                <span className="text-green-400">BECAS UVG</span>
              </h1>
            </div>
          </div>
          <div className="text-center lg:text-right">
            <div className="text-2xl lg:text-4xl font-bold mb-2">SÁBADO,</div>
            <div className="text-3xl lg:text-5xl font-bold text-green-400 mb-4">6 DE SEPTIEMBRE</div>
            <div className="text-base lg:text-xl">
              <div>De 8:00 a. m. a 1:00 p. m.</div>
              <div>Campus Central UVG</div>
            </div>
          </div>
        </div>

        {/* Event Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-green-600 py-2 lg:py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white text-sm lg:text-base">
            <div className="flex items-center space-x-2">
              <span className="text-lg">📅</span>
              <span>EVENTO</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">🕐</span>
              <span>8:00 AM - 1:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* UVG HOY Section */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="mb-8 text-center">
                <h2 className="text-xl lg:text-2xl font-bold text-green-600 mb-6">UVG HOY</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 lg:gap-8">
                {/* Featured Article */}
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gray-200">
                    <Image
                      src="/university-students-in-laboratory-medical-setting.jpg"
                      alt="Programa de Becas SEGEPLAN"
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3 lg:p-4">
                    <h3 className="font-bold text-xs lg:text-sm mb-2 text-blue-600">Programa de Becas SEGEPLAN</h3>
                    <p className="text-xs text-gray-600">
                      La Secretaría de Planificación y Programación de la Presidencia (SEGEPLAN), ofrece el programa de
                      becas nacionales, para interesados que deseen aplicar a la cobertura de cuotas de estudio
                      universitarias.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gray-200">
                    <Image
                      src="/students-working-technology-innovation.jpg"
                      alt="UVG con acreditación institucional 4-eres"
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3 lg:p-4">
                    <h3 className="font-bold text-xs lg:text-sm mb-2 text-blue-600">
                      UVG con acreditación institucional 4-eres
                    </h3>
                    <p className="text-xs text-gray-600">
                      Esta acreditación institucional avala a UVG como una institución que cumple con los estándares
                      académicos por esta agencia europea y se reconoce su trayectoria, impacto y calidad académica.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gray-200">
                    <Image
                      src="/female-student-psychology-counseling.jpg"
                      alt="Especialización de educadores para enfrentar la crisis"
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3 lg:p-4">
                    <h3 className="font-bold text-xs lg:text-sm mb-2 text-blue-600">
                      Especialización de educadores para enfrentar la crisis
                    </h3>
                    <p className="text-xs text-gray-600">
                      El objetivo fue ofrecer a directores y docentes de las escuelas de ASODEP, herramientas para
                      continuar la comunicación a través de las tecnologías disponibles.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gray-200">
                    <Image
                      src="/sustainability-environmental-project-students.jpg"
                      alt="Aprendizaje virtual en tiempos de confinamiento"
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3 lg:p-4">
                    <h3 className="font-bold text-xs lg:text-sm mb-2 text-blue-600">
                      Aprendizaje virtual en tiempos de confinamiento
                    </h3>
                    <p className="text-xs text-gray-600">
                      El desarrollo de la temática estuvo a cargo del Dr. Sergio Pineda, Médico especializado en
                      Ginecología y Obstetricia en Guatemala y Nueva York, actualmente es Vicepresidente de Task Force.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 order-1 lg:order-2">
              <div className="space-y-6">
                <h3 className="font-bold text-gray-800 text-sm border-b border-gray-200 pb-2">SERVICIOS</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-sm text-gray-800 mb-1">BIBLIOTECA UVG</h4>
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-xs underline">
                      Portal de servicio de Biblioteca de UVG Central
                    </a>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-gray-800 mb-2">PROGRAMAS</h4>
                    <div className="ml-4">
                      <h5 className="font-bold text-xs text-gray-700 mb-1">CENTRO DE ESTUDIOS AZTLÁN</h5>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Programa que aporta y contribuye al estudio, conservación y manejo del Lago Atitlán
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-gray-800 mb-1">CENTRO DE IDIOMAS</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Se desarrollan cursos libres de distintos idiomas para grupos específicos, niños, jóvenes-adultos.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-gray-800 mb-1">EDUCACIÓN CONTINUA</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Programa de actualización y formación profesional para personas, formación empresas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-8 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">¿QUÉ ESTÁ PASANDO EN UVG?</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <Image
                  src="/female-student-studying-debate.jpg"
                  alt="Estudiante UVG"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 lg:p-6">
                <h3 className="font-bold text-xs lg:text-sm mb-2 uppercase">
                  CAMILA CASTELLANOS, ESTUDIANTE DE CIENCIAS POLÍTICAS, REPRESENTARÁ A GUATEMALA EN HABILIDADES DE
                  DEBATE EN LOS JÓVENES
                </h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <Image
                  src="/students-working-technology-innovation.jpg"
                  alt="Estudiantes UVG"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 lg:p-6">
                <h3 className="font-bold text-xs lg:text-sm mb-2 uppercase">
                  DEL DIAGNÓSTICO AL ACOMPAÑAMIENTO: LA EXPERIENCIA DE ESTUDIANTES DE UVG AL RETENER TALENTO
                  UNIVERSITARIO
                </h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <Image
                  src="/sustainability-environmental-project-students.jpg"
                  alt="Proyecto UVG"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 lg:p-6">
                <h3 className="font-bold text-xs lg:text-sm mb-2 uppercase">
                  CAMINO A LA SOSTENIBILIDAD: LA UNIVERSIDAD DEL VALLE LIDERA EN LA IMPLEMENTACIÓN DEL ESTÁNDAR CERO
                  COMBUSTIBLE
                </h3>
              </CardContent>
            </Card>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-4 lg:mt-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-purple-600">
                <Image
                  src="/young-entrepreneurs-business-competition.jpg"
                  alt="Emprendedores UVG"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 lg:p-6">
                <h3 className="font-bold text-xs lg:text-sm mb-2 uppercase">
                  G-WEEKEND: UNA NUEVA GENERACIÓN DE EMPRENDEDORES NACE EN UVG
                </h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <Image
                  src="/students-technology-programming-computers.jpg"
                  alt="Estudiantes Tecnología"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 lg:p-6">
                <h3 className="font-bold text-xs lg:text-sm mb-2 uppercase">
                  ESTUDIANTES DEL PROYECTO DE GAMA PARTICIPARON EN CONSEJOS DE LA FACULTAD DE INGENIERÍA
                </h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <Image
                  src="/female-student-psychology-counseling.jpg"
                  alt="Estudiante Psicología"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 lg:p-6">
                <h3 className="font-bold text-xs lg:text-sm mb-2 uppercase">
                  JIMENA HERNÁNDEZ RECIBIÓ DE POLÍTICA PÚBLICA UNA VISIÓN RENOVADA EN PSICOLOGÍA CLÍNICA
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Graduate Program Ad */}
      <section className="py-4 lg:py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-gradient-to-r from-purple-600 to-red-600 rounded-lg p-4 lg:p-8 text-white gap-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Image
                src="/psychology-counseling-session.jpg"
                alt="Consejería Psicológica"
                width={80}
                height={80}
                className="lg:w-24 lg:h-24 rounded-lg"
              />
              <div className="text-center sm:text-left">
                <div className="text-xs lg:text-sm uppercase tracking-wide">POSGRADO EN</div>
                <div className="text-xl lg:text-3xl font-bold">Consejería Psicológica</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base">
                Conoce más
              </Button>
              <div className="text-xs lg:text-sm">UVGMASTERS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">ADMISIONES UVG</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-base lg:text-lg mb-2">INGRESA AL PORTAL DE ADMISIONES EN LÍNEA</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Accede al Portal - Crea tu cuenta de usuario</li>
                    <li>• Completa tu información personal y académica</li>
                    <li>• Ingresa los datos que se te solicitan en carrera y área de información</li>
                    <li>• Sube los siguientes documentos</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-base lg:text-lg mb-2">PREPÁRATE PARA LA PRUEBA</h3>
                  <p className="text-sm text-gray-600">Descarga la guía de estudio</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-base lg:text-lg mb-2">REALIZA LA PRUEBA</h3>
                  <p className="text-sm text-gray-600">Llega al Palacio de los Deportes el día de tu cita</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-base lg:text-lg mb-2">CONOCE TU RESULTADO E INSCRÍBETE</h3>
                  <p className="text-sm text-gray-600">
                    Aproximadamente 48 hrs. a una semana después recibirás tu resultado
                  </p>
                </div>
              </div>
            </div>

            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden order-1 lg:order-2 lg:flex-1">
              <Image
                src="/university-classroom-students-studying.jpg"
                alt="Estudiantes UVG"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-8 lg:py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8">¡EL LUGAR DONDE CONSTRUYES LO QUE IMAGINAS!</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            <div className="bg-white/10 rounded-lg p-4 lg:p-6">
              <h3 className="text-lg lg:text-xl font-bold mb-4">VISITANOS</h3>
              <p className="text-sm">Ven a conocer nuestro campus</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 lg:p-6">
              <h3 className="text-lg lg:text-xl font-bold mb-4">TE APOYAMOS</h3>
              <p className="text-sm">Programas de apoyo financiero</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 lg:p-6 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg lg:text-xl font-bold mb-4">VISITANOS</h3>
              <p className="text-sm">Conoce nuestras instalaciones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
              <h4 className="font-bold mb-4">ACADÉMICO</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-green-400">
                    Pregrado
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Posgrado
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Educación Continua
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">SERVICIOS</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-green-400">
                    Biblioteca
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Laboratorios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Campus Virtual
                  </a>
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
