import React from "react";

const Icons = {
    Sun: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" className="fill-primary/10 stroke-primary"/>
            <path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/>
        </svg>
    ),
    Eye: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" className="fill-secondary/10 stroke-primary"/>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 5V3"/><path d="M12 21v-2"/><path d="M5 12H3"/><path d="M21 12h-2"/>
        </svg>
    ),
    Hands: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="6" width="20" height="12" rx="2" className="fill-primary/10 stroke-primary"/>
            <circle cx="12" cy="12" r="2" />
            <path d="M6 12h.01M18 12h.01" />
        </svg>
    )
};

export const Method = () => {
    const steps = [
        {
            icon: Icons.Sun,
            label: "Posicionamento",
        },
        {
            icon: Icons.Eye,
            label: "Análise de Mercado",
        },
        {
            icon: null,
            label: "Estratégia",
        },
        {
            icon: Icons.Hands,
            label: "Venda",
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-background">
            <div className="container px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground">
                        Conheça nosso <span className="text-primary italic">método</span>
                    </h2>

                    <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        A Nocrato Marketing transforma sua presença digital em resultados reais. Com o método PAEV,
                        criamos estratégias inovadoras para aumentar o engajamento da sua empresa e impulsionar suas
                        vendas online.
                    </p>
                </div>

                <div className="flex justify-center items-center max-w-5xl mx-auto">
                    {/* MOBILE: flex-col | DESKTOP: flex-row */}
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-0 md:gap-0 w-full">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center relative w-full md:w-auto">

                                <div className="flex flex-col items-center gap-3 z-10 w-full md:w-32">
                                    {step.label === "Estratégia" ? (
                                        <div className="relative w-20 h-20 flex items-center justify-center my-2 md:my-0">
                                            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
                                                <polygon points="50,0 95,25 95,75 50,100 5,75 5,25" fill="hsl(var(--primary))" fillOpacity="0.1" />
                                                <polygon points="50,0 95,25 95,75 50,100 5,75 5,25" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
                                            </svg>
                                            <span className="text-3xl font-bold text-primary relative z-10 pb-1">N</span>
                                        </div>
                                    ) : (
                                        <div className="w-20 h-20 rounded-full bg-background border-2 border-border flex items-center justify-center relative z-10 hover:border-primary/50 transition-colors duration-300 my-2 md:my-0">
                                            {step.icon && <step.icon className="w-10 h-10 text-foreground" />}
                                        </div>
                                    )}
                                    <span className="text-sm font-medium text-foreground text-center mb-4 md:mb-0">{step.label}</span>
                                </div>

                                {index < steps.length - 1 && (
                                    <>
                                        {/* LINHA DESKTOP (Horizontal) */}
                                        <div className="hidden md:block w-16 lg:w-24 h-0.5 bg-border mx-[-10px] mt-10 relative z-0" />

                                        {/* LINHA MOBILE (Vertical) */}
                                        <div className="md:hidden w-0.5 h-12 bg-border my-[-10px] relative z-0" />
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};