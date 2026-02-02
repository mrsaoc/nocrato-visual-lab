import { Search, Target, ShoppingCart } from "lucide-react";

export const Method = () => {
  const steps = [
    {
      icon: Target,
      label: "Posicionamento",
    },
    {
      icon: Search,
      label: "Análise de Mercado",
    },
    {
      icon: null,
      label: "Estratégia",
    },
    {
      icon: ShoppingCart,
      label: "Venda",
    },
  ];

  return (
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Conheça nosso <span className="text-primary italic">método</span>
            </h2>

            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A Nocrato Marketing transforma sua presença digital em resultados reais. Com o método DAILY,
              criamos estratégias inovadoras para aumentar o engajamento da sua empresa e impulsionar suas
              vendas online. Nossa equipe especializada desenvolve soluções personalizadas para atrair mais
              leads qualificados e fortalecer sua marca no digital.
            </p>
          </div>

          <div className="flex justify-center items-center max-w-5xl mx-auto">
            {/* Usei items-start para ter controle preciso da altura da linha via margin-top */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-0 w-full">
              {steps.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-start relative">
                    <div className="flex flex-col items-center gap-3 z-10 w-32"> {/* w-32 garante largura fixa para centralizar texto */}
                      {step.label === "Estratégia" ? (
                          <div className="relative w-20 h-20 flex items-center justify-center">
                            {/* ViewBox ajustado para 0 0 100 100 para garantir simetria perfeita */}
                            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
                              <polygon
                                  /* Pontos recalculados para preencher o quadrado e centralizar */
                                  points="50,0 95,25 95,75 50,100 5,75 5,25"
                                  fill="hsl(var(--primary))"
                                  stroke="hsl(var(--primary))"
                                  strokeWidth="2"
                              />
                            </svg>
                            {/* O N agora fica no centro absoluto do container de 80px */}
                            <span className="text-3xl font-bold text-primary-foreground relative z-10 pb-1">N</span>
                          </div>
                      ) : (
                          <div className="w-20 h-20 rounded-full bg-background border-2 border-border flex items-center justify-center relative z-10">
                            {step.icon && <step.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />}
                          </div>
                      )}

                      <span className="text-sm font-medium text-foreground text-center mt-2">{step.label}</span>
                    </div>

                    {index < steps.length - 1 && (
                        /* mt-10 = 40px, exatamente metade da altura do ícone (80px), garantindo o centro */
                        <div className="hidden md:block w-16 h-0.5 bg-border mx-[-10px] mt-10 relative z-0" />
                    )}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};