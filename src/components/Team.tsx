import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import bricioImg from "@/assets/bricio.png";
import pedroImg from "@/assets/pedro.png";
import sophiaImg from "@/assets/sophia.png";

export const Team = () => {
  const team = [
    {
      name: "BRÍCIO",
      role: "ESTRATEGISTA",
      description: "Estrategista digital, e gestor da agência nocrato…",
      image: bricioImg,
      badge: "ESTRATEGISTA",
    },
    {
      name: "PEDRO",
      role: "PROGRAMADOR",
      description: "Desenvolvedor Web, Engenheiro de IA. Mais Engenheiro do que IA, mas é o cara certo para o trabalho!",
      image: pedroImg,
      badge: "PROGRAMADOR",
    },
    {
      name: "SOPHIA",
      role: "DESIGNER",
      description: "Designer Sênior, Publicitária. Licencia de Arte, Especialista em Publicidade e Marketing. Tem mais ilustrações que a gente.",
      image: sophiaImg,
      badge: "DESIGNER",
    },
  ];

  return (
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Conheça nossa equipe
            </h1>
          </div>

          {/* Flexbox centralizado para garantir alinhamento correto com 3 itens */}
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, index) => (
                <Card key={index} className="bg-card border-border text-center w-full md:max-w-[280px]">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-primary/20"
                      />
                      <Badge className="bg-primary text-primary-foreground mb-2 hover:bg-primary/90">
                        {member.badge}
                      </Badge>
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-1">{member.name}</h4>
                    <p className="text-primary font-semibold mb-3 text-sm">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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