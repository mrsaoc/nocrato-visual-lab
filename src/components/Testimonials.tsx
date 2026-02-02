import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import drMarcioImg from "@/assets/drmarcio.png";
import draFabianaImg from "@/assets/drafabiana.png";
import textureImg from "@/assets/image-removebg-preview.png";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "DR MARCIO",
      role: "DR MARCIO",
      subtitle: "Ele lotou sua agenda por 2 meses",
      text: "Ele lotou a agenda por 2 meses, ganhou mais de 15 mil seguidores em apenas 30 dias e ainda alcançou conteúdos com mais de 1,2 milhão de visualizações.",
      image: drMarcioImg,
    },
    {
      name: "DRA FABIANA",
      role: "DRA FABIANA",
      subtitle: "",
      text: "Cresceu mais de 30 mil seguidores está na 15 mentoria e é referência quando o assunto é injetáveis para dor.",
      image: draFabianaImg,
    },
  ];

  return (
      <section className="relative py-16 md:py-24 bg-[#FABE01] overflow-hidden">
        {/* Textura Responsiva */}
        <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.10] invert"
            style={{
              backgroundImage: `url(${textureImg})`,
              backgroundRepeat: 'repeat',
              backgroundSize: '120px' // Menor para mobile
            }}
        />

        <div className="container relative z-10 px-4">
          <div className="mb-10 md:mb-12 text-center md:text-left">
            <h2 className="text-xs md:text-sm font-bold text-[#111111]/70 mb-2 tracking-wider uppercase">
              Veja Alguns
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-[#111111]">
              DEPOIMENTOS
            </h3>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-[#111111] border-none shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] w-full md:w-[350px] group transition-transform hover:-translate-y-2 duration-300">
                  <div className="h-40 md:h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent z-10 opacity-60" />
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 relative z-20 -mt-10">
                    <div className="mb-4">
                      <Badge className="bg-white text-black font-bold hover:bg-white/90 mb-3">
                        {testimonial.role}
                      </Badge>
                      {testimonial.subtitle && (
                          <p className="text-xs text-[#FABE01] italic font-serif mb-1">{testimonial.subtitle}</p>
                      )}
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed italic border-l-2 border-[#FABE01] pl-4">
                      "{testimonial.text}"
                    </p>
                    <p className="text-[#FABE01] font-bold mt-4 text-right text-xs tracking-widest uppercase opacity-80">
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
};