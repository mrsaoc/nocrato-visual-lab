import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { TrendingUp, Users, ShieldCheck, Star, ChevronLeft, ChevronRight } from "lucide-react";

// --- IMPORTANDO SUAS IMAGENS LOCAIS ---
import bricio1 from "@/assets/bricioepedro.png";
import bricio2 from "@/assets/bricio2.jpeg";
import pedro1 from "@/assets/pedro1.jpeg";
import pedro2 from "@/assets/pedro2.jpeg";

export const Hero = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const plugin = useRef(
        Autoplay({ delay: 8000, stopOnInteraction: false })
    );

    const slides = [
        {
            image: bricio1,
            // AJUSTE FINO DE ENQUADRAMENTO:
            // object-[center_35%] posiciona o foco da imagem a 35% do topo.
            // Isso geralmente coloca o rosto logo abaixo do header de forma natural.
            // Se ainda cortar um pouco, tente 40%. Se ficar muito baixo, tente 30%.
            align: "object-[center_35%]",
            tag: "Marketing de Raiz Forte",
            title: (
                <>
                    A equipe de marketing{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FABE01] to-[#DE7928]">
            certa
          </span>
                </>
            ),
            description: "Para aumentar seu engajamento e número de vendas com a resiliência de quem conhece o terreno."
        },
        {
            image: pedro1,
            align: "object-[center_35%]", // Ajuste fino para o Pedro
            tag: "Alta Performance",
            title: (
                <>
                    Tenha sua agenda{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FABE01] to-[#DE7928]">
            lotada
          </span>
                </>
            ),
            description: "Campanhas de tráfego pago otimizadas para atrair o público particular qualificado que sua clínica merece."
        },
        {
            image: bricio2,
            align: "object-[center_35%]", // Ajuste fino para a segunda foto do Bricio
            tag: "Autoridade Médica",
            title: (
                <>
                    Transforme seguidores em{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FABE01] to-[#DE7928]">
            pacientes
          </span>
                </>
            ),
            description: "Posicionamento estratégico e ético para médicos que desejam ser a referência número 1 na sua especialidade."
        },
        {
            image: pedro2,
            align: "object-[center_35%]", // Ajuste fino para a segunda foto do Pedro
            tag: "Tecnologia Exclusiva",
            title: (
                <>
                    Sua clínica na vanguarda da{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FABE01] to-[#DE7928]">
            inovação
          </span>
                </>
            ),
            description: "Sites de alta conversão e sistemas inteligentes que trabalham para você 24 horas por dia."
        }
    ];

    const avatarImages = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=faces",
    ];

    useEffect(() => {
        if (!api) return;
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        // Voltei para h-[100dvh] e tela cheia normal
        <section className="relative h-[100dvh] flex items-center overflow-hidden bg-[#111111] group/hero">

            {/* --- CONTROLES MANUAIS --- */}
            <button
                onClick={() => api?.scrollPrev()}
                // Voltei o top para 1/2 (centro da tela)
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-white/10 bg-black/20 text-white/30 backdrop-blur-md transition-all
        hover:bg-black/50 hover:text-[#FABE01] hover:border-[#FABE01]/50
        opacity-30 md:opacity-0 md:group-hover/hero:opacity-100 duration-500 cursor-pointer pointer-events-auto"
                aria-label="Anterior"
            >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <button
                onClick={() => api?.scrollNext()}
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-white/10 bg-black/20 text-white/30 backdrop-blur-md transition-all
        hover:bg-black/50 hover:text-[#FABE01] hover:border-[#FABE01]/50
        opacity-30 md:opacity-0 md:group-hover/hero:opacity-100 duration-500 cursor-pointer pointer-events-auto"
                aria-label="Próximo"
            >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* --- CAMADA 1: CARROSSEL --- */}
            {/* Voltei para tela cheia: absolute inset-0 h-full */}
            <div className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing">
                <Carousel
                    setApi={setApi}
                    plugins={[plugin.current]}
                    className="w-full h-full [&>div]:h-full"
                    opts={{ loop: true, align: "start" }}
                >
                    <CarouselContent className="-ml-0 h-full">
                        {slides.map((slide, index) => (
                            <CarouselItem key={index} className="pl-0 h-full w-full">
                                <div className="relative w-full h-full">
                                    <img
                                        src={slide.image}
                                        alt={`Slide ${index + 1}`}
                                        // O align aqui (ex: object-[center_35%]) vai garantir o enquadramento correto sem zoom excessivo
                                        className={`absolute inset-0 w-full h-full object-cover ${slide.align}`}
                                    />

                                    {/* GRADIENTE SPOTLIGHT
                      Ajustei para ser um pouco mais transparente no meio (via-[#111111]/50)
                      para a pessoa aparecer mais.
                  */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/50 to-transparent z-10" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* --- CAMADA 3: ELEMENTOS FLUTUANTES --- */}
            {/* Voltei o posicionamento original */}
            <div className="absolute inset-y-0 right-0 w-1/2 z-10 pointer-events-none hidden md:block max-w-[700px]">
                {/* Card ROI */}
                <div className="absolute top-[25%] right-[10%] bg-black/40 backdrop-blur-md border border-[#FABE01]/30 p-4 rounded-xl flex items-center gap-4 animate-float-slow shadow-[0_0_30px_rgba(250,190,1,0.1)]">
                    <div className="bg-[#FABE01]/20 p-3 rounded-lg">
                        <TrendingUp className="w-8 h-8 text-[#FABE01]" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-xl leading-none">+10x</p>
                        <p className="text-zinc-400 text-xs uppercase tracking-wider font-semibold">Retorno em Vendas</p>
                    </div>
                </div>

                {/* Card Prova Social */}
                <div className="absolute bottom-[20%] right-[15%] bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 animate-float-medium shadow-2xl">
                    <div className="bg-white/10 p-3 rounded-full">
                        <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <div className="flex -space-x-3 mb-1">
                            {avatarImages.map((avatarUrl, i) => (
                                <img
                                    key={i}
                                    src={avatarUrl}
                                    alt={`Paciente ${i+1}`}
                                    className="w-8 h-8 rounded-full border-2 border-[#111111] object-cover"
                                />
                            ))}
                            <div className="w-8 h-8 rounded-full bg-[#FABE01] border-2 border-[#111111] flex items-center justify-center text-[9px] font-black text-[#111111] z-10">
                                +1k
                            </div>
                        </div>
                        <p className="text-zinc-300 text-xs font-medium pl-1">Pacientes Impactados</p>
                    </div>
                </div>

                {/* Card Selo */}
                <div className="absolute bottom-[10%] right-[45%] bg-gradient-to-br from-[#FABE01] to-[#DE7928] p-[1px] rounded-full animate-float-fast opacity-90">
                    <div className="bg-black/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#FABE01]" />
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Método Validado</span>
                    </div>
                </div>
            </div>

            {/* --- EFEITOS DE FUNDO --- */}
            <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-secondary/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none z-0" />
            <div className="absolute inset-0 z-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>

            {/* --- CAMADA 4: CONTEÚDO PRINCIPAL --- */}
            <div className="container relative z-20 h-full flex flex-col justify-center px-4 md:pl-28 md:pr-12 pt-24 md:pt-32 pointer-events-none">

                <div className="w-full max-w-2xl mx-auto md:mx-0 text-center md:text-left">

                    <div key={current} className="animate-in fade-in slide-in-from-bottom-8 duration-1000">

                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#FABE01]/30 rounded-full bg-[#FABE01]/5 backdrop-blur-sm">
                            <Star className="w-3 h-3 text-[#FABE01] fill-[#FABE01]" />
                            <span className="text-[#FABE01] text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  {slides[current].tag}
                </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                            {slides[current].title}
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium text-shadow-sm min-h-[5rem] md:min-h-[4rem] flex items-start md:justify-start justify-center">
                            {slides[current].description}
                        </p>

                        <Button
                            size="lg"
                            className="w-full md:w-auto bg-[#FABE01] hover:bg-[#FABE01]/90 text-[#111111] font-bold px-8 py-6 text-lg rounded-sm transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,190,1,0.3)] hover:shadow-[0_0_30px_rgba(250,190,1,0.5)] pointer-events-auto"
                            asChild
                        >
                            <a
                                href="http://wa.me/5513991187759"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fale com um especialista
                            </a>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};