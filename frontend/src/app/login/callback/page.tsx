"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginCallback() {
    const router = useRouter();

    useEffect(() => {
        // Obtén los parámetros de la URL
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        const email = params.get("email");
        const name = params.get("name");
        const picture = params.get("picture");

        if (token) {
            // Guarda el token en una cookie
            document.cookie = `token=${token}; path=/;`;

            // Opcional: guarda los datos del usuario en localStorage o contexto global
            localStorage.setItem("user", JSON.stringify({ email, name, picture }));

            // Redirige a dashboard o home
            router.push("/");
        } else {
            router.push("/login?error=NoToken");
        }
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <p className="text-lg">Procesando login...</p>
        </div>
    );
}