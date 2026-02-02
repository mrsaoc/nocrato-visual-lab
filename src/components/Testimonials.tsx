import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import drMarcioImg from "@/assets/drmarcio.png";
import draFabianaImg from "@/assets/drafabiana.png";

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
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-primary-foreground/70 mb-2 tracking-wider">
              Veja Alguns
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary-foreground">DEPOIMENTOS</h3>
          </div>

          {/* Alterado de Grid para Flex com Justify Center para centralizar os cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-background/95 border-none overflow-hidden shadow-lg w-full md:max-w-[350px]">
                  <div className="h-40 bg-muted overflow-hidden">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {testimonial.subtitle && (
                          <p className="text-sm text-foreground italic mb-2">{testimonial.subtitle}</p>
                      )}
                      <Badge className="bg-primary text-primary-foreground mb-2">
                        {testimonial.role}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
};