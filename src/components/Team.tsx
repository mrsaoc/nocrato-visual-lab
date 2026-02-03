import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import bricioImg from "@/assets/bricio.png";
import pedroImg from "@/assets/pedro.png";
import sophiaImg from "@/assets/sophia.png";
import textureImg from "@/assets/image-removebg-preview.png";

export const Team = () => {
    const team = [
        {
            name: "BRÍCIO",
            role: "ESTRATEGISTA",
            description: "Estrategista digital e gestor da agência. A mente por trás do Método PAEV que escala clínicas.",
            image: bricioImg,
            badge: "ESTRATEGISTA",
        },
        {
            name: "LETÍCIA",
            role: "HEAD COMERCIAL",
            description: "Especialista em fechamento e processos de vendas. Ela garante que nenhum lead qualificado seja perdido na sua clínica.",
            // Imagem placeholder profissional (Mulher)
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
            badge: "COMERCIAL",
        },
        {
            name: "MARCOS",
            role: "EDITOR & DEV",
            description: "A fusão de criatividade e lógica. Edita vídeos cinematográficos e desenvolve soluções web de alta performance.",
            // Imagem placeholder profissional (Homem Criativo)
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
            badge: "AUDIOVISUAL",
        },
        {
            name: "PEDRO",
            role: "PROGRAMADOR",
            description: "Desenvolvedor Web e Engenheiro de IA. Transforma ideias complexas em códigos que rodam liso.",
            image: pedroImg,
            badge: "FULL STACK",
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
        <section className="relative py-24 bg-[#FABE01]">
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
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-[#111111] mb-8">
                        Quem faz acontecer
                    </h1>
                    <p className="text-[#111111]/80 font-medium max-w-2xl mx-auto text-lg">
                        Um time multidisciplinar focado em uma única missão: escalar sua autoridade médica.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 items-stretch">
                    {team.map((member, index) => (
                        // CARDS PRETOS PARA CONTRASTE
                        <Card key={index} className="bg-[#111111] border-none text-center w-full md:w-[280px] hover:-translate-y-2 transition-all duration-300 group shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] flex flex-col">
                            <CardContent className="p-8 flex flex-col h-full">

                                {/* Foto com Aro Dourado */}
                                <div className="mb-6 relative inline-block mx-auto">
                                    <div className="absolute inset-0 rounded-full border border-[#FABE01] opacity-30 scale-105 group-hover:scale-110 transition-transform duration-500" />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full object-cover border-2 border-[#161616] bg-[#1a1a1a]"
                                    />
                                </div>

                                <div className="mb-4">
                                    <Badge className="bg-white text-black font-bold hover:bg-zinc-200">
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
                    ))}
                </div>
            </div>
        </section>
    );
};