import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle } from "lucide-react";
import drMarcioImg from "@/assets/drmarcio.png";
import draFabianaImg from "@/assets/drafabiana.png";
import textureImg from "@/assets/image-removebg-preview.png";

export const Testimonials = () => {
    const [activeTab, setActiveTab] = useState<"image" | "video">("image");

    const imageTestimonials = [
        {
            name: "DR MARCIO",
            role: "MÉDICO DO ESPORTE",
            subtitle: "Agenda lotada por 2 meses",
            text: "Ele lotou a agenda por 2 meses, ganhou mais de 15 mil seguidores em apenas 30 dias e ainda alcançou conteúdos com mais de 1,2 milhão de visualizações.",
            image: drMarcioImg,
        },
        {
            name: "DRA FABIANA",
            role: "DERMATOLOGISTA",
            subtitle: "Referência em Injetáveis",
            text: "Cresceu mais de 30 mil seguidores, está na 15ª mentoria e se tornou a maior referência da região quando o assunto é injetáveis para dor e estética.",
            image: draFabianaImg,
        },
    ];

    // Placeholder para os vídeos (usando as mesmas imagens como "Thumbnail" por enquanto)
    const videoTestimonials = [
        {
            name: "DR MARCIO",
            role: "DEPOIMENTO EM VÍDEO",
            thumbnail: drMarcioImg,
            duration: "02:14",
        },
        {
            name: "DRA FABIANA",
            role: "DEPOIMENTO EM VÍDEO",
            thumbnail: draFabianaImg,
            duration: "01:45",
        }
    ];

    return (
        <section className="relative py-24 bg-[#111111] overflow-hidden">
            {/* Textura sutil invertida */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] invert"
                style={{
                    backgroundImage: `url(${textureImg})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '150px'
                }}
            />

            <div className="container relative z-10 px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-sm font-bold text-[#FABE01] mb-2 tracking-wider uppercase">
                        Resultados Comprovados
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
                        O que dizem nossos <span className="text-[#FABE01]">parceiros</span>
                    </h3>

                    {/* --- SELETOR DE ABAS (TABS) --- */}
                    <div className="inline-flex bg-[#161616] p-1 rounded-full border border-white/10 relative z-20">
                        <button
                            onClick={() => setActiveTab("image")}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                                activeTab === "image"
                                    ? "bg-[#FABE01] text-black shadow-lg scale-105"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            Prints & Resultados
                        </button>
                        <button
                            onClick={() => setActiveTab("video")}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                                activeTab === "video"
                                    ? "bg-[#FABE01] text-black shadow-lg scale-105"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            <PlayCircle className="w-4 h-4" />
                            Em Vídeo
                        </button>
                    </div>
                </div>

                {/* CONTEÚDO DAS ABAS */}
                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 min-h-[400px]">

                    {/* ABA 1: IMAGENS (O que já tínhamos) */}
                    {activeTab === "image" && imageTestimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-[#161616] border border-white/5 w-full md:w-[350px] group transition-all hover:-translate-y-2 duration-300 animate-in fade-in zoom-in duration-500">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent z-10 opacity-60" />
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <CardContent className="p-8 relative z-20 -mt-10">
                                <div className="mb-4">
                                    <Badge className="bg-[#FABE01] text-black font-bold hover:bg-[#FABE01]/90 mb-3">
                                        {testimonial.role}
                                    </Badge>
                                    {testimonial.subtitle && (
                                        <p className="text-xs text-[#FABE01] italic font-serif mb-1">{testimonial.subtitle}</p>
                                    )}
                                </div>
                                <p className="text-sm text-zinc-300 leading-relaxed italic border-l-2 border-[#FABE01] pl-4">
                                    "{testimonial.text}"
                                </p>
                                <p className="text-white font-bold mt-4 text-right text-xs tracking-widest uppercase opacity-50">
                                    {testimonial.name}
                                </p>
                            </CardContent>
                        </Card>
                    ))}

                    {/* ABA 2: VÍDEOS (Novo Layout) */}
                    {activeTab === "video" && videoTestimonials.map((video, index) => (
                        <Card key={index} className="bg-[#161616] border border-white/5 w-full md:w-[350px] group cursor-pointer hover:border-[#FABE01]/50 transition-all hover:-translate-y-2 duration-300 animate-in fade-in zoom-in duration-500">
                            <div className="h-[350px] overflow-hidden relative">
                                {/* Imagem de Capa (Thumbnail) */}
                                <img
                                    src={video.thumbnail}
                                    alt={video.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-80 transition-all duration-500"
                                />

                                {/* Botão de Play Central */}
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="w-16 h-16 rounded-full bg-[#FABE01]/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(250,190,1,0.4)]">
                                        <PlayCircle className="w-8 h-8 text-black fill-current" />
                                    </div>
                                </div>

                                {/* Informações Sobrepostas */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                                    <Badge className="bg-white/10 backdrop-blur-md text-white border-none mb-2">
                                        {video.duration}
                                    </Badge>
                                    <h4 className="text-xl font-bold text-white mb-1">{video.name}</h4>
                                    <p className="text-[#FABE01] text-xs font-bold tracking-widest uppercase">Assista o depoimento</p>
                                </div>
                            </div>
                        </Card>
                    ))}

                </div>
            </div>
        </section>
    );
};