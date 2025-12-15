import React from 'react'

const Spinner = () => {
    return (
       <div className="min-h-screen bg-gradient-to-r from-white-800 to-red-900 text-gray-100 flex items-center justify-center pt-24">
            <div className="flex flex-col items-center">
                {/* Spinner personalizado */}
                <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-blue-400 font-medium">Cargando productos...</p>
            </div>
        </div>
    )
}

export default Spinner