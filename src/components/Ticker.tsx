export const Ticker = () => {
    // O texto exato solicitado pelo cliente
    const text = "ATENÇÃO: Exclusivo para empresas que faturam R$ 60 mil OU MAIS por mês.";

    return (
        <section className="bg-[#FABE01] py-3 overflow-hidden border-y border-black/10 relative z-20">
            <div className="flex whitespace-nowrap animate-marquee">
                {/* Repetimos a frase várias vezes para o efeito de rolagem infinita */}
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 mx-4">
            <span className="text-[#111111] font-black text-sm md:text-base tracking-tighter uppercase">
              {text}
            </span>
                        {/* Um separador sutil entre as repetições */}
                        <span className="text-[#111111] opacity-30 text-xl">-</span>
                    </div>
                ))}
            </div>
        </section>
    );
};