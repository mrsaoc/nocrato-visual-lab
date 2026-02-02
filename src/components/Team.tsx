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
      <section className="relative py-16 md:py-24 bg-[#0D0D0D]">
        {/* Textura */}
        <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] invert"
            style={{
              backgroundImage: `url(${textureImg})`,
              backgroundRepeat: 'repeat',
              backgroundSize: '150px'
            }}
        />

        <div className="container relative z-10 px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Conheça nossa equipe
            </h1>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 items-center">
            {team.map((member, index) => (
                <Card key={index} className="bg-[#161616] border border-white/5 text-center w-full md:w-[280px] hover:border-[#FABE01]/40 transition-all duration-300 group">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-6 relative inline-block">
                      <div className="absolute inset-0 rounded-full border border-[#FABE01] opacity-30 scale-105 group-hover:scale-110 transition-transform duration-500" />
                      <img
                          src={member.image}
                          alt={member.name}
                          className="w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto object-cover border-2 border-[#161616]"
                      />
                    </div>

                    <div className="mb-4">
                      <Badge className="bg-[#FABE01] text-black font-bold hover:bg-[#FABE01]/90">
                        {member.badge}
                      </Badge>
                    </div>

                    <h4 className="font-bold text-xl text-white mb-1">{member.name}</h4>
                    <p className="text-[#FABE01]/80 text-xs font-bold tracking-widest mb-4 uppercase">{member.role}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed">
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