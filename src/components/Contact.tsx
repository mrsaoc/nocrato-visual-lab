import { Button } from "@/components/ui/button";
import textureImg from "@/assets/image-removebg-preview.png";

export const Contact = () => {
  return (
      <section id="contact" className="relative py-16 md:py-24 bg-[#FABE01]">
        <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.08] invert"
            style={{
              backgroundImage: `url(${textureImg})`,
              backgroundRepeat: 'repeat',
              backgroundSize: '150px'
            }}
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[500px] bg-white opacity-[0.1] blur-[100px] rounded-full pointer-events-none" />

        <div className="container relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#111111] mb-6 leading-tight">
            Tire suas dúvidas,
          </h2>

          <p className="text-lg md:text-xl text-[#111111]/80 font-medium mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Responda esse formulário e nossa equipe entrará em contato
          </p>

          <Button
              size="lg"
              className="w-full md:w-auto bg-[#111111] hover:bg-[#111111]/80 text-white font-bold px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl rounded-sm shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] transition-all hover:scale-105"
              asChild
          >
            <a href="http://wa.me/5513991187759" target="_blank" rel="noopener noreferrer">
              Clique e faça agora mesmo.
            </a>
          </Button>
        </div>
      </section>
  );
};