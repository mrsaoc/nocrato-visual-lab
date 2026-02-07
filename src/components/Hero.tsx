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

// Imagens (Mantenha suas importações atuais)
import bricio1 from "@/assets/bricioepedro.png";
import bricio2 from "@/assets/bricio2.jpeg";
import pedro1 from "@/assets/pedro1.jpeg";
import pedro2 from "@/assets/pedro2.jpeg";

// 1. AQUI ESTÁ A CORREÇÃO: Definimos que o Hero aceita 'onInterest'
interface HeroProps {
    onInterest?: (interest: string) => void;
}

// 2. Recebemos a prop aqui
export const Hero = ({ onInterest }: HeroProps) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const plugin = useRef(
        Autoplay({ delay: 8000, stopOnInteraction: false })
    );

    const slides = [
        {
            image: bricio1,
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
            align: "object-[center_35%]",
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
            align: "object-[center_35%]",
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
            align: "object-[center_35%]",
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

    // Função para tratar o clique no CTA
    const handleCtaClick = () => {
        // Se a função onInterest foi passada pelo Index, usamos ela
        if (onInterest) {
            const currentInterest = slides[current].tag;
            onInterest(`Banner: ${currentInterest}`);
        } else {
            // Fallback: se não passar a prop, apenas rola para o contato (comportamento antigo)
            window.open("http://wa.me/5513991187759", "_blank");
        }
    };

    return (
        <section id="hero" className="relative h-[100dvh] flex items-center overflow-hidden bg-[#111111] group/hero">

            {/* Setas de Navegação */}
            <button
                onClick={() => api?.scrollPrev()}
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-white/10 bg-black/40 text-white/50 backdrop-blur-md transition-all
        hover:bg-black/80 hover:text-[#FABE01] hover:border-[#FABE01]/50
        opacity-30 md:opacity-0 md:group-hover/hero:opacity-100 duration-500 cursor-pointer pointer-events-auto"
            >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <button
                onClick={() => api?.scrollNext()}
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-white/10 bg-black/40 text-white/50 backdrop-blur-md transition-all
        hover:bg-black/80 hover:text-[#FABE01] hover:border-[#FABE01]/50
        opacity-30 md:opacity-0 md:group-hover/hero:opacity-100 duration-500 cursor-pointer pointer-events-auto"
            >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Carrossel */}
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
                                        className={`absolute inset-0 w-full h-full object-cover ${slide.align}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent/20 z-10" />
                                    <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent z-10" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* Elementos Flutuantes */}
            <div className="absolute inset-y-0 right-0 w-1/2 z-10 pointer-events-none hidden md:block max-w-[700px]">
                <div className="absolute top-[25%] right-[5%] bg-black/40 backdrop-blur-sm border border-[#FABE01]/20 p-3 rounded-lg flex items-center gap-3 animate-float-slow shadow-lg">
                    <div className="bg-[#FABE01]/10 p-2 rounded-md">
                        <TrendingUp className="w-5 h-5 text-[#FABE01]" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-lg leading-none text-shadow-sm">+10x</p>
                        <p className="text-zinc-300 text-[10px] uppercase tracking-wider font-semibold">Retorno em Vendas</p>
                    </div>
                </div>

                <div className="absolute bottom-[20%] right-[10%] bg-black/40 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex items-center gap-3 animate-float-medium shadow-lg">
                    <div className="bg-white/10 p-2 rounded-full">
                        <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <div className="flex -space-x-2 mb-1">
                            {avatarImages.map((avatarUrl, i) => (
                                <img
                                    key={i}
                                    src={avatarUrl}
                                    alt={`Paciente ${i + 1}`}
                                    className="w-6 h-6 rounded-full border border-[#111111] object-cover"
                                />
                            ))}
                            <div className="w-6 h-6 rounded-full bg-[#FABE01] border border-[#111111] flex items-center justify-center text-[8px] font-black text-[#111111] z-10">
                                +1k
                            </div>
                        </div>
                        <p className="text-zinc-300 text-[10px] font-medium pl-1">Pacientes Impactados</p>
                    </div>
                </div>

                <div className="absolute bottom-[10%] right-[40%] bg-gradient-to-br from-[#FABE01]/50 to-[#DE7928]/50 p-[1px] rounded-full animate-float-fast opacity-80">
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                        <ShieldCheck className="w-3 h-3 text-[#FABE01]" />
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest">Método Validado</span>
                    </div>
                </div>
            </div>

            {/* Conteúdo de Texto */}
            <div className="container relative z-20 h-full flex flex-col justify-center px-4 md:pl-28 md:pr-12 pt-24 md:pt-32 pointer-events-none">
                <div className="w-full max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                    <div key={current} className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#FABE01]/30 rounded-full bg-[#FABE01]/10 backdrop-blur-sm shadow-md">
                            <Star className="w-3 h-3 text-[#FABE01] fill-[#FABE01]" />
                            <span className="text-[#FABE01] text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                {slides[current].tag}
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] drop-shadow-lg">
                            {slides[current].title}
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-zinc-200 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium drop-shadow-md min-h-[5rem] md:min-h-[4rem] flex items-start md:justify-start justify-center">
                            {slides[current].description}
                        </p>

                        {/* 3. Botão atualizado para usar a função de clique */}
                        <Button
                            size="lg"
                            className="w-full md:w-auto bg-[#FABE01] hover:bg-[#FABE01]/90 text-[#111111] font-bold px-8 py-6 text-lg rounded-sm transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,190,1,0.3)] hover:shadow-[0_0_30px_rgba(250,190,1,0.5)] pointer-events-auto"
                            onClick={handleCtaClick}
                        >
                            Fale com um especialista
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};