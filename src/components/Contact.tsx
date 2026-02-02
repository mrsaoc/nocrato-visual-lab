import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import textureImg from "@/assets/image-removebg-preview.png";

export const Contact = () => {
  return (
      <section id="contact" className="relative py-16 md:py-24 bg-[#FABE01] overflow-hidden">
        {/* --- Textura de Fundo (Branca Invertida) --- */}
        <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.08] invert"
            style={{
              backgroundImage: `url(${textureImg})`,
              backgroundRepeat: 'repeat',
              backgroundSize: '150px'
            }}
        />

        <div className="container relative z-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

            {/* LADO ESQUERDO: Chamada de Texto */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-[#111111] mb-6 leading-tight">
                Sua clínica <br/>
                precisa <span className="text-white drop-shadow-md">aparecer.</span>
              </h2>

              <p className="text-lg md:text-xl text-[#111111]/80 font-medium mb-8 leading-relaxed">
                Preencha os dados ao lado e descubra como nossa estratégia especializada em saúde pode lotar sua agenda.
              </p>

              {/* Lista de Vantagens (Visual clean) */}
              <div className="hidden md:flex flex-col gap-4 text-[#111111]/90 font-semibold">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span>Estratégias éticas (respeitando o CFM)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span>Foco em pacientes particulares</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span>Autoridade digital para o médico</span>
                </div>
              </div>
            </div>

            {/* LADO DIREITO: O Formulário (Card Preto) */}
            <div className="bg-[#111111] p-6 md:p-10 rounded-sm shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] relative group">
              {/* Detalhe Dourado no Topo do Card */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FABE01] to-[#DE7928]" />

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                {/* Nome */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="name" className="text-zinc-400 text-xs uppercase tracking-widest">Nome Completo</Label>
                  <Input
                      id="name"
                      placeholder="Dr(a). Seu Nome"
                      className="bg-[#1A1A1A] border-[#333] text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-600 transition-all"
                  />
                </div>

                {/* Telefone */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="phone" className="text-zinc-400 text-xs uppercase tracking-widest">Whatsapp</Label>
                  <Input
                      id="phone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="bg-[#1A1A1A] border-[#333] text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-600 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="email" className="text-zinc-400 text-xs uppercase tracking-widest">Email Corporativo</Label>
                  <Input
                      id="email"
                      type="email"
                      placeholder="contato@suaclinica.com"
                      className="bg-[#1A1A1A] border-[#333] text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-600 transition-all"
                  />
                </div>

                {/* Especialidade Médica (Select ou Input) */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="specialty" className="text-zinc-400 text-xs uppercase tracking-widest">Especialidade Médica</Label>
                  <Input
                      id="specialty"
                      placeholder="Ex: Dermatologia, Cardiologia..."
                      className="bg-[#1A1A1A] border-[#333] text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-600 transition-all"
                  />
                </div>

                <Button
                    size="lg"
                    className="w-full bg-[#FABE01] hover:bg-[#FABE01]/90 text-[#111111] font-bold h-auto min-h-[3.5rem] py-4 md:py-0 md:h-14 text-base md:text-lg rounded-sm mt-4 transition-transform active:scale-95 md:hover:scale-[1.02] whitespace-normal leading-tight"
                >
                  QUERO ALAVANCAR MINHA CLÍNICA
                </Button>

                <p className="text-zinc-500 text-xs text-center mt-4">
                  Seus dados estão seguros conosco.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
  );
};