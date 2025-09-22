# UVG Website Project

Proyecto de prueba desarrollado con **Next.js 13**, **TypeScript**, **Tailwind CSS**, y componentes personalizados. Este proyecto simula autenticación institucional y registro de usuarios en Google Sheets usando Sheet.best.  

---

## 📂 Estructura del proyecto.

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

git clone https://github.com/JhonArl321/PROYECTO-XXS-cloneUVG.git

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


## 🔧 Configuración de Sheet.best

- Este proyecto usa **Sheet.best** para registrar los datos de usuario en una hoja de cálculo.
- Por defecto, se usa la URL pública incluida en el proyecto.
- Si quieres usar tu propia hoja de cálculo, reemplaza la URL en `lib/google-sheets.ts` o en la función `sendUserDataToSheets` con la URL que te proporciona Sheet.best.



📄 Notas importantes
Este proyecto es para fines educativos y de prueba.

La alerta de “hackeo” es simulada, no afecta realmente tu sistema.

Maneja los datos de usuarios con cuidado si decides probar autenticaciones reales.


## 🌐 Ver Demo

Puedes ver una **demo funcional** del proyecto en línea aquí:  
https://universidadvalledeguatemala.netlify.app/