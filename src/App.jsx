import Home from "./components/Home";

const App = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-6 py-10"
            style={{
                backgroundImage:
                    "url('https://www.ifoto.ai/blog/wp-content/uploads/ai-photo-enhancer.webp')",
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            {/* Overlay for better text visibility */}
                <div className="bg-white/80 backdrop-blur-sm w-full max-w-4xl rounded-2xl px-8 py-12 shadow-lg flex flex-col items-center justify-center text-center">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
                        AI IMAGE ENHANCER!!
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">
                        Upload your image and wait a moment while our AI works on it.
                    </p>
                </div>

                {/* Main Component */}
                <Home />

                {/* Footer */}
                <div className="mt-12 text-center text-gray-600 text-sm font-light">
                    <p>Let the AI do the magic ✨</p>
                </div>
            </div>
        </div>
    );
};

export default App;
