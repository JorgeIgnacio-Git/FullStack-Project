"use client";

import { useRouter } from 'next/navigation';

const Login = () => {

    const router = useRouter();

    const handleGoogleLogin = () => {
        //Redirige a una ruta que funciona como intermediario
        router.push('/api/auth/google');

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Iniciar sesión</h2>
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center gap-2 bg-white border border-gray-300 hover:border-blue-500 text-gray-700 px-6 py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-200 font-medium text-lg"
                >
                    <span>Continuar con Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;