import { ArrowRight } from "lucide-react";
import textureImg from "@/assets/image-removebg-preview.png";

export const TargetAudience = () => {
    const segments = [
        {
            title: "Fisioterapeutas e Ortopedistas",
            description: "Aumente o volume de cirurgias particulares e torne-se a referência número 1 da sua cidade.",
            image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop", // Imagem de Centro Cirúrgico Premium
        },
        {
            title: "Dermatologistas",
            description: "Atraia pacientes para procedimentos estéticos de alto valor (Botox, Laser, Preenchimento).",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", // Imagem de Pele/Estética
        },
        {
            title: "Nutrólogos & Endócrinos",
            description: "Venda protocolos de emagrecimento e performance para pacientes que valorizam saúde.",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop", // Imagem de Fitness/Saúde
        },
        {
            title: "Clínicas e Consultórios",
            description: "Estratégias de tráfego local para lotar sua agenda de avaliações todos os dias.",
            image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop", // Imagem de Clínica Moderna
        }
    ];

    return (
        <section className="relative py-24 bg-[#FABE01] overflow-hidden">
            {/* Textura sutil invertida */}
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
                    <h2 className="text-sm font-bold text-[#111111]/70 mb-2 tracking-widest uppercase">
                        Segmentação
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-[#111111] mb-6">
                        Quem <span className="border-b-4 border-black">atendemos?</span>
                    </h3>
                    <p className="text-[#111111]/80 font-medium max-w-2xl mx-auto leading-relaxed text-lg">
                        Nossa metodologia foi desenhada exclusivamente para alavancar estes 4 perfis médicos:
                    </p>
                </div>

                {/* Grid de Segmentos com IMAGENS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {segments.map((segment, index) => (
                        <div
                            key={index}
                            className="group relative h-[400px] bg-[#111111] rounded-sm overflow-hidden border-none shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Imagem de Fundo Full */}
                            <div className="absolute inset-0">
                                <img
                                    src={segment.image}
                                    alt={segment.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                                />
                                {/* Overlay Gradiente Preto para o texto aparecer */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                            </div>

                            {/* Conteúdo Sobreposto */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full z-20">
                                <div className="w-12 h-1 bg-[#FABE01] mb-4 group-hover:w-20 transition-all duration-500" />

                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FABE01] transition-colors">
                                    {segment.title}
                                </h4>

                                <p className="text-zinc-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    {segment.description}
                                </p>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};