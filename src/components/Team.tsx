import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// --- IMPORTANDO SUAS IMAGENS ---
import bricioImg from "@/assets/bricio.png";
import pedroImg from "@/assets/pedroteam.jpeg";
import sophiaImg from "@/assets/sophia.png";
import textureImg from "@/assets/image-removebg-preview.png";

export const Team = () => {
    // Configuração do Autoplay
    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    );

    // DADOS REORGANIZADOS: Brício -> Pedro -> Letícia
    const team = [
        {
            name: "BRÍCIO",
            role: "ESTRATEGISTA",
            description: "Estrategista digital e gestor da agência. A mente por trás do Método PAEV que escala clínicas.",
            image: bricioImg,
            badge: "ESTRATEGISTA",
        },
        {
            name: "PEDRO",
            role: "PROGRAMADOR",
            description: "Desenvolvedor Web e Engenheiro de IA. Transforma ideias complexas em códigos que rodam liso.",
            image: pedroImg,
            badge: "FULL STACK",
        },
        {
            name: "LETÍCIA",
            role: "HEAD COMERCIAL",
            description: "Especialista em fechamento e processos de vendas. Ela garante que nenhum lead qualificado seja perdido na sua clínica.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
            badge: "COMERCIAL",
        },
        {
            name: "MARCOS",
            role: "EDITOR & DEV",
            description: "A fusão de criatividade e lógica. Edita vídeos cinematográficos e desenvolve soluções web de alta performance.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
            badge: "AUDIOVISUAL",
        },
        {
            name: "SOPHIA",
            role: "DESIGNER",
            description: "Designer Sênior e Publicitária. Cria a estética premium que diferencia seu perfil da concorrência.",
            image: sophiaImg,
            badge: "DESIGNER",
        },
    ];

    return (
        <section className="relative py-24 bg-[#FABE01] overflow-hidden">
            {/* Textura de Fundo */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.08] invert"
                style={{
                    backgroundImage: `url(${textureImg})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '150px'
                }}
            />

            <div className="container relative z-10 px-4">

                {/* Cabeçalho */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-[#111111] mb-8">
                        Quem faz acontecer
                    </h1>
                    <p className="text-[#111111]/80 font-medium max-w-2xl mx-auto text-lg">
                        Um time multidisciplinar focado em uma única missão: escalar sua autoridade médica.
                    </p>
                </div>

                {/* CARROSSEL DA EQUIPE */}
                <div className="max-w-7xl mx-auto">
                    <Carousel
                        plugins={[plugin.current]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        // Adicionei 'cursor-grab' para indicar interatividade
                        className="w-full cursor-grab active:cursor-grabbing"
                    >
                        <CarouselContent className="-ml-4 pb-4">
                            {team.map((member, index) => (
                                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                    <div className="h-full pt-2">
                                        {/* CORREÇÃO DO DRAG:
                                            Adicionei a classe 'select-none'.
                                            Isso impede que o navegador selecione o texto enquanto arrasta.
                                        */}
                                        <Card className="bg-[#111111] border-none text-center hover:-translate-y-2 transition-all duration-300 group shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] flex flex-col h-full rounded-xl select-none">
                                            <CardContent className="p-8 flex flex-col h-full items-center">

                                                {/* Foto com Aro Dourado */}
                                                <div className="mb-6 relative inline-block mx-auto">
                                                    <div className="absolute inset-0 rounded-full border border-[#FABE01] opacity-30 scale-105 group-hover:scale-110 transition-transform duration-500" />
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        // pointer-events-none na imagem também ajuda no drag mobile
                                                        className="w-32 h-32 rounded-full object-cover border-2 border-[#161616] bg-[#1a1a1a] pointer-events-none"
                                                    />
                                                </div>

                                                <div className="mb-4">
                                                    <Badge className="bg-white text-black font-bold hover:bg-zinc-200 pointer-events-none">
                                                        {member.badge}
                                                    </Badge>
                                                </div>

                                                <h4 className="font-bold text-xl text-white mb-1">{member.name}</h4>
                                                <p className="text-[#FABE01] text-xs font-bold tracking-widest mb-4 uppercase">{member.role}</p>

                                                <p className="text-sm text-zinc-400 leading-relaxed mt-auto">
                                                    {member.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Botões de Navegação */}
                        <div className="hidden md:block">
                            <CarouselPrevious className="left-[-20px] lg:left-[-50px] bg-[#111111] border-none text-white hover:bg-white hover:text-black h-12 w-12" />
                            <CarouselNext className="right-[-20px] lg:right-[-50px] bg-[#111111] border-none text-white hover:bg-white hover:text-black h-12 w-12" />
                        </div>
                    </Carousel>
                </div>

                {/* Indicador Mobile */}
                <div className="md:hidden flex justify-center mt-6 gap-2">
                    <p className="text-[#111111]/60 text-xs font-bold uppercase tracking-widest animate-pulse">
                        Deslize para ver mais
                    </p>
                </div>

            </div>
        </section>
    );
};