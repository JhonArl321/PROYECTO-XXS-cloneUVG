# UVG Website Project

Proyecto de prueba desarrollado con **Next.js 13**, **TypeScript**, **Tailwind CSS**, y componentes personalizados. Este proyecto simula autenticación institucional y registro de usuarios en Google Sheets usando Sheet.best.  

---

## 📂 Estructura del proyecto

uvg-website/
├─ .next/
├─ app/
├─ components/
├─ hooks/
├─ lib/
├─ node_modules/
├─ public/
├─ styles/
├─ .gitignore
├─ components.json
├─ middleware.ts
├─ next-env.d.ts
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.mjs
├─ tsconfig.json



## 🚀 Tecnologías usadas

- **Next.js 13** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React Icons**
- **Sheet.best** para registro de datos en hojas de cálculo
- **LocalStorage** para persistencia temporal de sesión

---

## 💻 Requisitos previos

- Node.js >= 18
- npm o pnpm


---

## ⚡ Instalación y ejecución

1. Clona el repositorio:

git clone https://github.com/tu-usuario/uvg-website.git

Accede al directorio del proyecto:

Instala dependencias:

npm install
# o usando pnpm
pnpm install
Inicia el servidor de desarrollo:

npm run dev
# o usando pnpm
pnpm dev
Abre en tu navegador:


📝 Funcionalidades
Autenticación simulada usando parámetros en URL (email, name, role).

Registro en Google Sheets a través de Sheet.best.

Mensajes de estado: éxito, error, autenticación hackeada.

LocalStorage para guardar temporalmente la sesión del usuario.

Interfaz con Tailwind CSS y componentes reutilizables.

⚙️ Uso
Al iniciar, la página procesa los datos de usuario desde la URL.

Dependiendo de los datos, muestra:

Mensaje de autenticación exitosa con información del usuario.

Mensaje de error de autenticación.

Mensaje de dispositivo hackeado (simulación de alerta crítica).

Botón

📄 Notas importantes
Este proyecto es para fines educativos y de prueba.

La alerta de “hackeo” es simulada, no afecta realmente tu sistema.

Maneja los datos de usuarios con cuidado si decides probar autenticaciones reales.

