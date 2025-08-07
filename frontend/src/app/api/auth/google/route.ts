/**
 * Este archivo es una API Route de Next.js (App Router).
 * 
 * 📌 **Ejecución en servidor**
 * - Todo archivo dentro de la carpeta `/app/api` se ejecuta únicamente en el servidor.
 * - No es necesario (ni recomendado) agregar `"use server";` en estos archivos, ya que Next.js los trata como código de servidor por defecto.
 *
 * ℹ️ **Sobre `"use server";`**
 * - El pragma `"use server";` se utiliza exclusivamente en Server Actions, normalmente exportadas desde componentes server.
 * - No lo utilices en API Routes.
 *
 * 🚀 **Funcionalidad del archivo**
 * - Este endpoint actúa como intermediario (proxy) para el flujo de autenticación con Google OAuth.
 * - Cuando un usuario solicita este endpoint (GET), la función redirige al usuario hacia el backend (NestJS) que gestiona la autenticación con Google.
 * - Usar un proxy en Next.js permite ocultar la URL real del backend, mejorar la seguridad y flexibilidad, y facilitar la integración con CORS y autenticación.
 *
 * 🛡️ **Buenas prácticas**
 * - Utiliza variables de entorno (`process.env`) para las URLs y secretos sensibles.
 * - Si necesitas agregar lógica extra (validaciones, logs, etc.), hazlo dentro de la función antes de redirigir.
 */

import { NextRequest } from "next/server";

// API Route: Intermediario para redirección a Google OAuth vía backend NestJS
export async function GET(request: NextRequest) {
    console.log("Redirigiendo a Google OAuth...", request);

    // Construcción de la URL de autenticación en el backend
    const backendUrl = `${process.env.NEST_BACKEND_URL}/auth/google`;

    // Redirección al backend NestJS para iniciar el proceso OAuth con Google
    return Response.redirect(backendUrl, 302);
}