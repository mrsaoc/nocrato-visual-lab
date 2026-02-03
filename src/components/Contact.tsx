// src/components/Contact.tsx
import { useState } from "react";
import { supabase } from "@/lib/supabase"; // Importa a conexão que criamos
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react"; // Ícone de carregamento
import { toast } from "sonner"; // Notificações bonitas
import textureImg from "@/assets/image-removebg-preview.png";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  // Estado para guardar os dados enquanto o usuário digita
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: ""
  });

  // Função que atualiza o estado quando o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Função que envia os dados para o Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que a página recarregue
    setLoading(true);

    try {
      // Envia para a tabela 'leads'
      // Certifique-se que as colunas no Supabase são: nome, whatsapp, email, especialidade
      const { error } = await supabase
          .from('leads')
          .insert([
            {
              // Coluna do Banco (PT) : Variável do Site (EN)
              nome: formData.name,
              whatsapp: formData.phone,
              email: formData.email,
              especialidade: formData.specialty  // <--- AQUI ERA O ERRO
            }
          ]);

      if (error) throw error;

      toast.success("Recebemos seu contato! Vamos alavancar sua clínica.");

      // Limpar formulário após sucesso
      setFormData({ name: "", phone: "", email: "", specialty: "" });

    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <section id="contact" className="relative py-16 md:py-24 bg-[#FABE01] overflow-hidden">
        {/* --- Textura de Fundo --- */}
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

            {/* LADO ESQUERDO: Texto (Mantido original) */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-[#111111] mb-6 leading-tight">
                Sua clínica <br/>
                precisa <span className="text-white drop-shadow-md">aparecer.</span>
              </h2>

              <p className="text-lg md:text-xl text-[#111111]/80 font-medium mb-8 leading-relaxed">
                Preencha os dados ao lado e descubra como nossa estratégia especializada em saúde pode lotar sua agenda.
              </p>

              {/* Lista de Vantagens */}
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

            {/* LADO DIREITO: O Formulário Conectado */}
            <div className="bg-[#111111] p-6 md:p-10 rounded-sm shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] relative group">
              {/* Detalhe Dourado no Topo */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FABE01] to-[#DE7928]" />

              <form className="space-y-6" onSubmit={handleSubmit}>

                {/* Nome */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="name" className="text-zinc-400 text-xs uppercase tracking-widest">Nome Completo</Label>
                  <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Dr(a). Seu Nome"
                      className="bg-[#1A1A1A] border-[#333] text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-600 transition-all"
                  />
                </div>

                {/* Whatsapp */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="phone" className="text-zinc-400 text-xs uppercase tracking-widest">Whatsapp</Label>
                  <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="contato@suaclinica.com"
                      className="bg-[#1A1A1A] border-[#333] text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-600 transition-all"
                  />
                </div>

                {/* Especialidade */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="specialty" className="text-zinc-400 text-xs uppercase tracking-widest">Especialidade Médica</Label>
                  <Input
                      id="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Dermatologia, Cardiologia..."
                      className="bg-[#1A1A1A] border-[#333] text-white focus:border-[#FABE01] h-12 rounded-sm placeholder:text-zinc-600 transition-all"
                  />
                </div>

                <Button
                    type="submit"
                    disabled={loading}
                    size="lg"
                    className="w-full bg-[#FABE01] hover:bg-[#FABE01]/90 text-[#111111] font-bold h-auto min-h-[3.5rem] py-4 md:py-0 md:h-14 text-base md:text-lg rounded-sm mt-4 transition-transform active:scale-95 md:hover:scale-[1.02] whitespace-normal leading-tight"
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