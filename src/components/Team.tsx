import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Importe as imagens reais aqui
import bricioImg from "@/assets/bricio.png";
import pedroImg from "@/assets/pedroteam.jpeg";
import sophiaImg from "@/assets/sophia.png";
import textureImg from "@/assets/image-removebg-preview.png";

export const Team = () => {
    // Dados da Equipe
    const team = [
        {
            name: "MARCOS",
            role: "EDITOR & DEV",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
            badge: "AUDIOVISUAL",
        },
        {
            name: "BRÍCIO",
            role: "ESTRATEGISTA",
            image: bricioImg,
            badge: "ESTRATEGISTA",
        },
        {
            name: "LETÍCIA",
            role: "HEAD COMERCIAL",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
            badge: "COMERCIAL",
        },

        {
            name: "PEDRO",
            role: "PROGRAMADOR",
            image: pedroImg,
            badge: "FULL STACK",
        },
        {
            name: "SOPHIA",
            role: "DESIGNER",
            image: sophiaImg,
            badge: "DESIGNER",
        },
    ];

    return (
        <section id="team" className="relative py-24 bg-[#FABE01] overflow-hidden">            {/* Textura de Fundo */}
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
                    <h1 className="text-4xl md:text-5xl font-black text-[#111111] mb-6 tracking-tight">
                        Quem faz acontecer
                    </h1>
                    <p className="text-[#111111]/80 font-medium max-w-2xl mx-auto text-lg">
                        Um time multidisciplinar focado em uma única missão: escalar sua autoridade médica.
                    </p>
                </div>

                {/* GRID ESTÁTICO ELEGANTE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center max-w-7xl mx-auto">
                    {team.map((member, index) => (
                        <div key={index} className="group relative">
                            {/* Card Vertical Limpo */}
                            <div className="h-full flex flex-col items-center">
                                {/* Container da Imagem */}
                                <div className="relative mb-4 w-full aspect-[3/4] overflow-hidden rounded-xl bg-black shadow-xl border-2 border-transparent group-hover:border-black/10 transition-all duration-500">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                    />
                                    {/* Overlay Dourado no Hover */}
                                    <div className="absolute inset-0 bg-[#FABE01] mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                                </div>

                                {/* Informações */}
                                <div className="text-center">
                                    <h3 className="text-xl font-black text-[#111111] mb-1">{member.name}</h3>
                                    <p className="text-[#111111]/70 text-xs font-bold tracking-widest uppercase mb-3">
                                        {member.role}
                                    </p>
                                    <Badge className="bg-[#111111] text-[#FABE01] hover:bg-black font-bold text-[10px] px-3 py-0.5">
                                        {member.badge}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};