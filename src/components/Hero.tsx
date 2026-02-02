import { Button } from "@/components/ui/button";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111111]">
            {/* Fundo com Gradiente Ultra Dark usando a nova paleta */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: `
            /* Luz Dourada (#FABE01) Focada e Discreta no topo direito */
            radial-gradient(circle at 90% 10%, rgba(250, 190, 1, 0.08) 0%, transparent 40%),
            
            /* Luz secundária (#DE7928) na esquerda para profundidade */
            radial-gradient(circle at 10% 90%, rgba(222, 121, 40, 0.03) 0%, transparent 40%),
            
            /* Fundo Soft Black */
            linear-gradient(180deg, #111111 0%, #0a0a0a 100%)
          `
                }}
            />

            {/* Textura de ruído sutil */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

            <div className="container relative z-10 py-20">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        A equipe de marketing{" "}
                        <span className="text-[#FABE01]">certa</span>
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
                        Para aumentar seu engajamento e número de vendas
                    </p>

                    <Button
                        size="lg"
                        className="bg-[#FABE01] hover:bg-[#FABE01]/90 text-[#111111] font-semibold px-8 py-6 text-lg"
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