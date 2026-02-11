import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import textureImg from "@/assets/image-removebg-preview.png";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ⚠️ COLE SUA URL NOVA AQUI ENTRE AS ASPAS ⚠️
  const SHEET_URL = "https://script.google.com/macros/s/AKfycbwSr8MyGeyWLdax25PZrXyyjWI5i34KtBICPK5oS4RkQjFBwvxbSNbBFfQrVAS-Osts/exec";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: ""
  });

  const formatPhone = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d)(\d{4})$/, "$1-$2")
        .slice(0, 15);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const finalValue = id === "phone" ? formatPhone(value) : value;
    setFormData((prev) => ({ ...prev, [id]: finalValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Preparar dados para o Google Sheets (Formato de Formulário Padrão)
    // O script espera: Nome, Whatsapp, Email, Especialidade (Maiúsculas importam no script que passei)
    const formBody = new URLSearchParams();
    formBody.append("Nome", formData.name);
    formBody.append("Whatsapp", formData.phone);
    formBody.append("Email", formData.email);
    formBody.append("Especialidade", formData.specialty);
    // A data é gerada automaticamente pelo script, não precisamos enviar

    try {
      // --- A: Tenta Enviar para o Google Sheets ---
      // Usamos 'no-cors' pois o Google não retorna confirmação legível para o navegador
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString()
      });

      // --- B: Tenta salvar no Supabase (Backup Seguro) ---
      const { error: supabaseError } = await supabase
          .from('leads')
          .insert([{
            nome: formData.name,
            whatsapp: formData.phone,
            email: formData.email,
            especialidade: formData.specialty
          }]);

      if (supabaseError) {
        console.error("Erro ao salvar no banco:", supabaseError);
      }

      // --- C: Sucesso ---
      toast.success("Cadastro realizado com sucesso!");

      // Pequeno delay para o usuário ver o toast antes de mudar de página
      setTimeout(() => {
        navigate("/sucesso");
      }, 1000);

    } catch (error) {
      console.error("Erro crítico:", error);
      toast.error("Houve um erro. Tente novamente ou chame no WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <section id="contact" className="relative py-16 md:py-24 bg-[#FABE01] overflow-hidden">
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

            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-[#111111] mb-6 leading-tight">
                Sua clínica <br/>
                precisa <span className="text-white drop-shadow-md">aparecer.</span>
              </h2>
              <p className="text-lg md:text-xl text-[#111111]/80 font-medium mb-8 leading-relaxed">
                Preencha os dados ao lado e descubra como nossa estratégia especializada em saúde pode lotar sua agenda.
              </p>

              <div className="hidden md:flex flex-col gap-4 text-[#111111]/90 font-semibold">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span>Estratégias éticas (respeitando o CFM)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span>Foco em pacientes particulares</span>
                </div>
              </div>
            </div>

            <div className="bg-[#111111] p-6 md:p-10 rounded-sm shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] relative group min-h-[500px] flex flex-col justify-center border border-zinc-800">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FABE01] to-[#DE7928]" />

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2 text-left">
                  <Label htmlFor="name" className="text-zinc-400 text-xs uppercase tracking-widest">Nome Completo</Label>
                  <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Dr(a). Seu Nome"
                      className="bg-[#1A1A1A] border-[#333] text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-600 transition-all focus:ring-1 focus:ring-[#FABE01]"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <Label htmlFor="phone" className="text-zinc-400 text-xs uppercase tracking-widest">Whatsapp</Label>
                  <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(00) 00000-0000"
                      maxLength={15}
                      className="bg-[#1A1A1A] border-[#333] text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-600 transition-all focus:ring-1 focus:ring-[#FABE01]"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <Label htmlFor="email" className="text-zinc-400 text-xs uppercase tracking-widest">Email Corporativo</Label>
                  <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="contato@suaclinica.com"
                      className="bg-[#1A1A1A] border-[#333] text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-600 transition-all focus:ring-1 focus:ring-[#FABE01]"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <Label htmlFor="specialty" className="text-zinc-400 text-xs uppercase tracking-widest">Especialidade Médica</Label>
                  <Input
                      id="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Dermatologia, Cardiologia..."
                      className="bg-[#1A1A1A] border-[#333] text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-600 transition-all focus:ring-1 focus:ring-[#FABE01]"
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