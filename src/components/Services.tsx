import { ArrowRight } from "lucide-react";
import textureImg from "@/assets/image-removebg-preview.png";

export const Services = () => {
    const services = [
        {
            title: "Social Media Médico",
            description: "Gestão completa do seu Instagram. Criamos conteúdos técnicos e estéticos que transmitem autoridade sem ferir o código de ética.",
            // TROCADA: Imagem focada no Instagram/Celular
            image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1974&auto=format&fit=crop",
        },
        {
            title: "Tráfego Pago Especializado",
            description: "Não gastamos, investimos. Campanhas no Google e Meta Ads focadas exclusivamente em atrair pacientes particulares e procedimentos de alto ticket.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Dados/Analytics
        },
        {
            title: "Branding & Posicionamento",
            description: "O médico é a marca. Desenvolvemos sua identidade visual e narrativa para que você seja percebido como a referência número 1 da sua região.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop", // Médico Dark
        }
    ];

    return (
        <section className="relative py-24 bg-[#111111] overflow-hidden border-t border-white/5">
            {/* Textura de Fundo Sutil */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] invert"
                style={{
                    backgroundImage: `url(${textureImg})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '150px'
                }}
            />

            <div className="container relative z-10 px-4">
                {/* Cabeçalho da Seção */}
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-[#FABE01] mb-2 tracking-widest uppercase">
                        Nossas Soluções
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                        O ecossistema completo para <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FABE01] to-[#DE7928]">seu consultório crescer</span>
                    </h3>
                </div>

                {/* GRID DE CARDS MAIORES */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#161616] rounded-sm overflow-hidden border border-white/5 hover:border-[#FABE01]/40 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_-15px_rgba(250,190,1,0.2)] flex flex-col h-full"
                        >
                            {/* Imagem de Capa */}
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-[#111111]/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                                />
                                {/* Degradê para o texto não ficar solto */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-90" />
                            </div>

                            {/* Conteúdo */}
                            <div className="p-8 flex flex-col flex-grow relative z-20 -mt-12">
                                <div className="w-12 h-1 bg-[#FABE01] mb-6 group-hover:w-20 transition-all duration-500" />

                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FABE01] transition-colors">
                                    {service.title}
                                </h4>

                                <p className="text-zinc-400 leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-[#FABE01] text-sm font-bold uppercase tracking-widest gap-2 group-hover:gap-4 transition-all opacity-80 group-hover:opacity-100">
                                    Saiba mais <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};