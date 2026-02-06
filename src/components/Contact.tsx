import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import textureImg from "@/assets/image-removebg-preview.png";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
          .from('leads')
          .insert([
            {
              nome: formData.name,
              whatsapp: formData.phone,
              email: formData.email,
              especialidade: formData.specialty
            }
          ]);

      if (error) throw error;

      toast.success("Cadastro realizado com sucesso!");
      setSuccess(true);

    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = `Olá! Acabei de me cadastrar no site.
  
Nome: ${formData.name}
Email: ${formData.email}
Whatsapp: ${formData.phone}
Especialidade: ${formData.specialty}

Gostaria de saber mais sobre como alavancar minha clínica!`;

  const whatsappLink = `https://wa.me/5513991187759?text=${encodeURIComponent(whatsappMessage)}`;

  return (
      // MUDANÇA: bg-[#FABE01] -> bg-[#111111] (Fundo Escuro)
      <section id="contact" className="relative py-16 md:py-24 bg-[#111111] overflow-hidden">

        {/* Textura de Fundo (Mantida com opacidade baixa) */}
        <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage: `url(${textureImg})`,
              backgroundRepeat: 'repeat',
              backgroundSize: '150px'
            }}
        />

        <div className="container relative z-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

            {/* LADO ESQUERDO: Texto (Agora Branco) */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Sua clínica <br/>
                precisa <span className="text-[#FABE01] drop-shadow-md">aparecer.</span>
              </h2>

              <p className="text-lg md:text-xl text-zinc-400 font-medium mb-8 leading-relaxed">
                Preencha os dados ao lado e descubra como nossa estratégia especializada em saúde pode lotar sua agenda.
              </p>

              <div className="hidden md:flex flex-col gap-4 text-zinc-300 font-semibold">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FABE01] rounded-full" />
                  <span>Estratégias éticas (respeitando o CFM)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FABE01] rounded-full" />
                  <span>Foco em pacientes particulares</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FABE01] rounded-full" />
                  <span>Autoridade digital para o médico</span>
                </div>
              </div>
            </div>

            {/* LADO DIREITO: Card do Formulário (Fundo levemente mais claro que o section) */}
            <div className="bg-[#1A1A1A] p-6 md:p-10 rounded-sm shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] relative group min-h-[500px] flex flex-col justify-center border border-zinc-800">

              {/* Detalhe Dourado no Topo */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FABE01] to-[#DE7928]" />

              {/* TELA DE SUCESSO */}
              {success ? (
                  <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="flex justify-center">
                      <CheckCircle className="w-20 h-20 text-[#FABE01]" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Muito obrigado!
                    </h3>

                    <p className="text-zinc-400 text-lg">
                      Seu cadastro foi recebido com sucesso. <br/>
                      Logo entraremos em contato com você.
                    </p>

                    <div className="pt-4">
                      <p className="text-zinc-500 text-sm mb-3 uppercase tracking-widest">
                        Quer agilizar o atendimento?
                      </p>
                      <Button
                          asChild
                          size="lg"
                          className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-14 text-lg rounded-sm transition-all"
                      >
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-6 w-6" />
                          Chamar no WhatsApp Agora
                        </a>
                      </Button>
                    </div>

                    <button
                        onClick={() => {
                          setSuccess(false);
                          setFormData({ name: "", phone: "", email: "", specialty: "" });
                        }}
                        className="text-zinc-500 hover:text-[#FABE01] underline text-sm mt-4"
                    >
                      Enviar outro cadastro
                    </button>
                  </div>
              ) : (
                  /* TELA DO FORMULÁRIO */
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2 text-left">
                      <Label htmlFor="name" className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Nome Completo</Label>
                      <Input
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Dr(a). Seu Nome"
                          className="bg-[#111111] border-zinc-800 text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-700 transition-all focus:ring-1 focus:ring-[#FABE01]"
                      />
                    </div>

                    <div className="space-y-2 text-left">
                      <Label htmlFor="phone" className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Whatsapp</Label>
                      <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(00) 00000-0000"
                          className="bg-[#111111] border-zinc-800 text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-700 transition-all focus:ring-1 focus:ring-[#FABE01]"
                      />
                    </div>

                    <div className="space-y-2 text-left">
                      <Label htmlFor="email" className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Email Corporativo</Label>
                      <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="contato@suaclinica.com"
                          className="bg-[#111111] border-zinc-800 text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-700 transition-all focus:ring-1 focus:ring-[#FABE01]"
                      />
                    </div>

                    <div className="space-y-2 text-left">
                      <Label htmlFor="specialty" className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Especialidade Médica</Label>
                      <Input
                          id="specialty"
                          value={formData.specialty}
                          onChange={handleChange}
                          required
                          placeholder="Ex: Dermatologia, Cardiologia..."
                          className="bg-[#111111] border-zinc-800 text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-700 transition-all focus:ring-1 focus:ring-[#FABE01]"
                      />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        size="lg"
                        className="w-full bg-[#FABE01] hover:bg-[#FABE01]/90 text-[#111111] font-bold h-auto min-h-[3.5rem] py-4 md:py-0 md:h-14 text-base md:text-lg rounded-sm mt-4 transition-transform active:scale-95 md:hover:scale-[1.02] whitespace-normal leading-tight shadow-[0_0_20px_rgba(250,190,1,0.2)]"
                    >
                      {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ENVIANDO...
                          </>
                      ) : (
                          "QUERO ALAVANCAR MINHA CLÍNICA"
                      )}
                    </Button>

                    <p className="text-zinc-600 text-xs text-center mt-4">
                      Seus dados estão seguros conosco.
                    </p>
                  </form>
              )}
            </div>

          </div>
        </div>
      </section>
  );
};