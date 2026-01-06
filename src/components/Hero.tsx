import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Fundo com Gradiente Ultra Dark (Preto Absoluto com brilho sutil) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            /* Luz Dourada Focada e Discreta no topo direito */
            radial-gradient(circle at 90% 10%, hsla(var(--primary), 0.08) 0%, transparent 40%),
            
            /* Luz secundária muito fraca na esquerda para profundidade */
            radial-gradient(circle at 10% 90%, hsla(var(--primary), 0.03) 0%, transparent 40%),
            
            /* Gradiente Linear para garantir o Preto Profundo no centro */
            linear-gradient(180deg, #000000 0%, #050505 100%)
          `
        }}
      />
      
      {/* Elemento de ruído sutil opcional para textura (deixa mais profissional) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            A equipe de marketing{" "}
            <span className="text-primary">certa</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
            Para aumentar seu engajamento e número de vendas
          </p>
          
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            asChild
          >
            <a href="http://wa.me/5513991187759" target="_blank" rel="noopener noreferrer">
              Fale com um especialista
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};