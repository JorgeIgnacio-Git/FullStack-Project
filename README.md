# ProyectoLogin

Este repositorio contiene una arquitectura **fullstack** con dos aplicaciones principales: un frontend realizado en **Next.js** y un backend realizado en **NestJS**. El propósito central del proyecto es implementar un flujo de autenticación utilizando Google OAuth, permitiendo a los usuarios iniciar sesión de forma segura.

---

## 🗂️ Estructura del Proyecto

```
ProyectoLogin/
│
├── frontend/    # Aplicación Next.js (React)
│
└── backend/     # API NestJS (Node.js, TypeScript)
```

---

## 🚀 Tecnologías Utilizadas

- **Frontend:** [Next.js](https://nextjs.org/), JavaScript/TypeScript, TailwindCSS
- **Backend:** [NestJS](https://nestjs.com/), TypeScript, Passport, JWT
- **OAuth:** Google OAuth 2.0
- **Otros:** Dotenv, Helmet, Cors

---

## 🔑 Características Principales

- **Login con Google:** Integración de Google OAuth 2.0.
- **JWT:** Creación y gestión de tokens para sesión segura.
- **Protección de rutas:** Rutas privadas accesibles sólo con autenticación.
- **Estructura escalable:** Separación clara de frontend y backend.
- **Variables de entorno:** Uso de `.env` y `.env.local` para credenciales y configuraciones sensibles.

---

## 🛠️ Configuración y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/JorgeIgnacio-Git/ProyectoLogin.git
cd ProyectoLogin
```

### 2. Configuración del Backend (`backend/`)

1. Entra a la carpeta del backend:
    ```bash
    cd backend
    ```
2. Instala dependencias:
    ```bash
    npm install
    ```
3. Crea un archivo `.env` con tus claves de Google y JWT:
    ```
    GOOGLE_CLIENT_ID=TU_CLIENT_ID
    GOOGLE_CLIENT_SECRET=TU_CLIENT_SECRET
    GOOGLE_CALLBACK_URL=http://localhost:3001/auth/google/callback
    JWT_SECRET=tu_jwt_secreto
    ```
4. Inicia el servidor:
    ```bash
    npm run start:dev
    ```

### 3. Configuración del Frontend (`frontend/`)

1. Entra a la carpeta del frontend:
    ```bash
    cd ../frontend
    ```
2. Instala dependencias:
    ```bash
    npm install
    ```
3. Crea un archivo `.env.local`:
    ```
    NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
    ```
4. Inicia la app de Next.js:
    ```bash
    npm run dev
    ```

---

## ✨ Uso

1. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
2. Haz clic en "Login con Google".
3. Autoriza la aplicación con tu cuenta de Google.
4. Accede a rutas privadas usando el token JWT generado.

---

## 📁 Scripts Útiles

### Backend

- `npm run start:dev` — Ejecuta el servidor NestJS en modo desarrollo.

### Frontend

- `npm run dev` — Ejecuta el servidor Next.js en modo desarrollo.

---

## 📝 Notas

- Asegúrate de tener configuradas las credenciales de Google en [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
- No subas tus archivos `.env` a repositorios públicos.
- Puedes personalizar y ampliar este proyecto para soportar otros proveedores de autenticación o bases de datos.

---

## 💡 Autor

- Jorge Ignacio  
- [GitHub](https://github.com/JorgeIgnacio-Git)

---
