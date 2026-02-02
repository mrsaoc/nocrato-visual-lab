import { Button } from "@/components/ui/button";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111111]">
            {/* Fundo Base */}
            <div className="absolute inset-0 z-0 bg-[#111111]" />

            {/* Gradientes Atmosféricos (Menores no mobile) */}
            <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-secondary/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

            {/* Textura de Ruído */}
            <div className="absolute inset-0 z-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>

            {/* --- GOLDEN WAVES (Adaptação Mobile) --- */}
            {/* Mobile: Fundo total, opacidade baixa. Desktop: Direita, opacidade normal. */}
            <div className="absolute inset-0 md:right-0 md:left-auto md:w-[60%] z-0 pointer-events-none overflow-hidden opacity-30 md:opacity-80">
                <svg className="w-full h-full" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                        d="M800 800V200C700 350 600 250 500 400C400 550 300 450 200 600C100 750 0 650 0 800H800Z"
                        fill="url(#gradient1)"
                        fillOpacity="0.2"
                        className="animate-float-slow"
                    />
                    <path
                        d="M800 800V300C720 400 620 350 520 500C420 650 320 550 220 700C120 850 0 750 0 800H800Z"
                        fill="url(#gradient2)"
                        fillOpacity="0.3"
                        className="animate-float-medium"
                        style={{ animationDirection: 'reverse' }}
                    />
                    <path
                        d="M800 800V400C750 450 650 400 550 550C450 700 350 600 250 750C150 900 0 850 0 800H800Z"
                        fill="url(#gradient3)"
                        fillOpacity="0.4"
                        className="animate-float-fast"
                    />
                    <defs>
                        <linearGradient id="gradient1" x1="400" y1="200" x2="400" y2="800" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#DE7928" />
                            <stop offset="1" stopColor="#DE7928" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="400" y1="300" x2="400" y2="800" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FABE01" />
                            <stop offset="1" stopColor="#FABE01" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="gradient3" x1="400" y1="400" x2="400" y2="800" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FABE01" />
                            <stop offset="1" stopColor="#DE7928" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="container relative z-10 py-12 md:py-20 px-4">
                <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                    <div className="inline-block px-3 py-1 mb-6 border border-[#FABE01]/20 rounded-full bg-[#FABE01]/5 backdrop-blur-sm">
                        <span className="text-[#FABE01] text-[10px] md:text-xs font-bold uppercase tracking-widest">
                            Marketing de Raiz Forte
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                        A equipe de marketing{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FABE01] to-[#DE7928]">
                            certa
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                        Para aumentar seu engajamento e número de vendas com a resiliência de quem conhece o terreno.
                    </p>

                    <Button
                        size="lg"
                        className="w-full md:w-auto bg-[#FABE01] hover:bg-[#FABE01]/90 text-[#111111] font-bold px-8 py-6 text-lg rounded-sm transition-transform hover:scale-105"
                        asChild
                    >
                        <a href="http://wa.me/5513991187759" target="_blank" rel="noopener noreferrer">
                            Fale com um especialista
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};