import { useState, useRef, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  ChevronRight,
  ArrowLeft,
  Check
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import textureImg from "@/assets/image-removebg-preview.png";

interface ContactProps {
  interestedService?: string;
}

const specialtiesOptions = [
  "Dermatologia",
  "Endocrinologia",
  "Estética Avançada",
  "Cirurgia Plástica",
  "Oftalmologia",
  "Ortopedia",
  "Nutrologia",
  "Odontologia",
  "Outra"
];

export const Contact = ({ interestedService }: ContactProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isTypingOther, setIsTypingOther] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: ""
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const otherSpecInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep === 0) nameInputRef.current?.focus();
      if (currentStep === 1) phoneInputRef.current?.focus();
      if (currentStep === 2) emailInputRef.current?.focus();
      if (currentStep === 3 && isTypingOther) otherSpecInputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, [currentStep, isTypingOther]);

  const formatPhone = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d)(\d{4})$/, "$1-$2")
        .slice(0, 15);
  };

  const handleChange = (field: string, value: string) => {
    const finalValue = field === "phone" ? formatPhone(value) : value;
    setFormData((prev) => ({ ...prev, [field]: finalValue }));
  };

  const handleNext = () => {
    if (currentStep === 0 && formData.name.length < 3) {
      toast.warning("Por favor, digite seu nome completo.");
      nameInputRef.current?.focus();
      return;
    }
    if (currentStep === 1 && formData.phone.length < 14) {
      toast.warning("Por favor, digite um WhatsApp válido.");
      phoneInputRef.current?.focus();
      return;
    }
    if (currentStep === 2 && !formData.email.includes("@")) {
      toast.warning("Por favor, digite um email válido.");
      emailInputRef.current?.focus();
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (currentStep < 3) {
        handleNext();
      } else if (currentStep === 3 && isTypingOther) {
        submitForm(formData.specialty);
      }
    }
  };

  const submitForm = async (finalSpecialty: string) => {
    setLoading(true);

    try {
      // Envia apenas colunas existentes no Supabase
      const { error } = await supabase
          .from('leads')
          .insert([
            {
              nome: formData.name,
              whatsapp: formData.phone,
              email: formData.email,
              especialidade: finalSpecialty
            }
          ]);

      if (error) throw error;

      setTimeout(() => {
        setLoading(false);
        setCurrentStep(4);
        toast.success("Aplicação enviada!");
      }, 800);

    } catch (error) {
      console.error("Erro Supabase:", error);
      toast.error("Erro ao enviar. Tente novamente.");
      setLoading(false);
    }
  };

  const handleSpecialtyClick = (spec: string) => {
    if (spec === "Outra") {
      setIsTypingOther(true);
      setFormData(prev => ({ ...prev, specialty: "" }));
    } else {
      setFormData(prev => ({ ...prev, specialty: spec }));
      submitForm(spec);
    }
  };

  const progress = ((currentStep + 1) / 4) * 100;

  const whatsappMessage = `Olá! Finalizei minha aplicação no site.${interestedService ? `\nInteresse: *${interestedService}*` : ""}
  
*Meus Dados:*
Nome: ${formData.name}
Especialidade: ${formData.specialty}

Aguardo o contato da equipe.`;
  const whatsappLink = `https://wa.me/5513991187759?text=${encodeURIComponent(whatsappMessage)}`;

  return (
      <section id="contact" className="relative py-20 md:py-32 bg-[#111111] min-h-screen flex flex-col justify-center overflow-hidden">

        <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] invert"
            style={{
              backgroundImage: `url(${textureImg})`,
              backgroundRepeat: 'repeat',
              backgroundSize: '150px'
            }}
        />

        <div className="container relative z-10 px-4 max-w-4xl mx-auto">

          {/* TELA DE SUCESSO - MINIMALISTA & SÉRIA */}
          {currentStep === 4 ? (
              <div className="flex flex-col items-center justify-center text-center animate-in fade-in duration-1000 slide-in-from-bottom-4">

                <div className="mb-8 opacity-0 animate-in zoom-in duration-700 delay-150 fill-mode-forwards">
                  <Check className="w-16 h-16 text-[#FABE01]" strokeWidth={1} />
                </div>

                <p className="text-[#FABE01] text-xs font-bold uppercase tracking-[0.3em] mb-6 opacity-80">
                  Solicitação Enviada
                </p>

                <h2 className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight">
                  Obrigado, <span className="font-bold">{formData.name}</span>.
                </h2>

                <div className="w-12 h-[1px] bg-zinc-800 mb-6"></div>

                <p className="text-zinc-500 text-lg mb-12 max-w-md mx-auto leading-relaxed font-light">
                  Seus dados foram encaminhados com sucesso. <br/>
                  Nossa equipe analisará seu perfil e entrará em contato em breve.
                </p>

                <Button
                    asChild
                    variant="outline"
                    className="border-[#FABE01] text-[#FABE01] hover:bg-[#FABE01] hover:text-[#111111] h-14 px-10 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-500"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Falar com a equipe agora
                  </a>
                </Button>
              </div>
          ) : (
              /* FORMULÁRIO STEP BY STEP */
              <div className="w-full max-w-2xl mx-auto">

                {/* Barra de Progresso Minimalista */}
                <div className="w-full h-[2px] bg-zinc-900 mb-16 relative">
                  <div
                      className="absolute top-0 left-0 h-full bg-[#FABE01] transition-all duration-700 ease-out shadow-[0_0_10px_#FABE01]"
                      style={{ width: `${currentStep === 3 && isTypingOther ? 95 : Math.min(progress, 100)}%` }}
                  />
                </div>

                {/* Botão Voltar */}
                {currentStep > 0 && (
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-zinc-600 hover:text-[#FABE01] transition-colors mb-10 text-[10px] uppercase tracking-[0.2em] font-bold"
                    >
                      <ArrowLeft className="w-3 h-3" /> Voltar
                    </button>
                )}

                {/* CONTEÚDO DOS PASSOS */}
                <div className="min-h-[300px] flex flex-col justify-center">

                  {/* PASSO 1: NOME */}
                  {currentStep === 0 && (
                      <div className="space-y-8 animate-in slide-in-from-right-8 duration-500 fade-in">
                        <label htmlFor="step-name" className="text-3xl md:text-5xl font-bold text-white leading-tight block">
                          Olá, Doutor(a). <br/>
                          <span className="text-zinc-600 font-light">Qual o seu nome completo?</span>
                        </label>
                        <input
                            ref={nameInputRef}
                            id="step-name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Digite aqui..."
                            className="w-full bg-transparent border-b border-zinc-800 text-white text-2xl md:text-3xl py-4 focus:outline-none focus:border-[#FABE01] placeholder:text-zinc-800 transition-colors font-light"
                            autoComplete="off"
                        />
                        <div className="flex items-center gap-4 pt-2">
                          <Button onClick={handleNext} className="bg-[#FABE01] text-black font-bold h-12 px-8 rounded-sm hover:bg-[#d4a001]">
                            CONTINUAR
                          </Button>
                          <span className="text-zinc-700 text-xs hidden md:inline-block">ou pressione <strong>Enter</strong></span>
                        </div>
                      </div>
                  )}

                  {/* PASSO 2: WHATSAPP */}
                  {currentStep === 1 && (
                      <div className="space-y-8 animate-in slide-in-from-right-8 duration-500 fade-in">
                        <label htmlFor="step-phone" className="text-3xl md:text-5xl font-bold text-white leading-tight block">
                          Prazer, {formData.name.split(' ')[0]}. <br/>
                          <span className="text-zinc-600 font-light">Seu WhatsApp de contato?</span>
                        </label>
                        <input
                            ref={phoneInputRef}
                            id="step-phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="(00) 00000-0000"
                            className="w-full bg-transparent border-b border-zinc-800 text-white text-2xl md:text-3xl py-4 focus:outline-none focus:border-[#FABE01] placeholder:text-zinc-800 transition-colors font-light"
                            autoComplete="off"
                        />
                        <div className="flex items-center gap-4 pt-2">
                          <Button onClick={handleNext} className="bg-[#FABE01] text-black font-bold h-12 px-8 rounded-sm hover:bg-[#d4a001]">
                            CONTINUAR
                          </Button>
                          <span className="text-zinc-700 text-xs hidden md:inline-block">ou pressione <strong>Enter</strong></span>
                        </div>
                      </div>
                  )}

                  {/* PASSO 3: EMAIL */}
                  {currentStep === 2 && (
                      <div className="space-y-8 animate-in slide-in-from-right-8 duration-500 fade-in">
                        <label htmlFor="step-email" className="text-3xl md:text-5xl font-bold text-white leading-tight block">
                          Perfeito. <br/>
                          <span className="text-zinc-600 font-light">Seu e-mail corporativo?</span>
                        </label>
                        <input
                            ref={emailInputRef}
                            id="step-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="nome@clinica.com"
                            className="w-full bg-transparent border-b border-zinc-800 text-white text-2xl md:text-3xl py-4 focus:outline-none focus:border-[#FABE01] placeholder:text-zinc-800 transition-colors font-light"
                            autoComplete="off"
                        />
                        <div className="flex items-center gap-4 pt-2">
                          <Button onClick={handleNext} className="bg-[#FABE01] text-black font-bold h-12 px-8 rounded-sm hover:bg-[#d4a001]">
                            CONTINUAR
                          </Button>
                          <span className="text-zinc-700 text-xs hidden md:inline-block">ou pressione <strong>Enter</strong></span>
                        </div>
                      </div>
                  )}

                  {/* PASSO 4: ESPECIALIDADE */}
                  {currentStep === 3 && (
                      <div className="space-y-8 animate-in slide-in-from-right-8 duration-500 fade-in">

                        {!isTypingOther ? (
                            <>
                              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
                                Para finalizar. <br/>
                                <span className="text-zinc-600 font-light">Qual sua especialidade?</span>
                              </h3>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {specialtiesOptions.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleSpecialtyClick(option)}
                                        disabled={loading}
                                        className={cn(
                                            "h-14 px-6 text-left border transition-all duration-300 group flex items-center justify-between",
                                            loading
                                                ? "opacity-50 cursor-not-allowed border-zinc-900 bg-zinc-900"
                                                : "border-zinc-800 bg-transparent hover:border-[#FABE01] hover:bg-[#FABE01] hover:text-[#111111] text-zinc-400"
                                        )}
                                    >
                                                    <span className="text-sm font-medium tracking-wide uppercase">
                                                        {option}
                                                    </span>
                                      {loading && formData.specialty === option ? (
                                          <Loader2 className="w-4 h-4 animate-spin" />
                                      ) : (
                                          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                      )}
                                    </button>
                                ))}
                              </div>
                            </>
                        ) : (
                            <div className="space-y-8 animate-in fade-in duration-300">
                              <label htmlFor="step-other" className="text-3xl md:text-5xl font-bold text-white leading-tight block">
                                Qual sua área de atuação?
                              </label>
                              <input
                                  ref={otherSpecInputRef}
                                  id="step-other"
                                  type="text"
                                  value={formData.specialty}
                                  onChange={(e) => handleChange("specialty", e.target.value)}
                                  onKeyDown={handleKeyDown}
                                  placeholder="Digite sua especialidade..."
                                  className="w-full bg-transparent border-b border-zinc-800 text-white text-2xl md:text-3xl py-4 focus:outline-none focus:border-[#FABE01] placeholder:text-zinc-800 transition-colors font-light"
                                  autoComplete="off"
                              />
                              <div className="flex items-center gap-4 pt-2">
                                <Button
                                    onClick={() => submitForm(formData.specialty)}
                                    disabled={loading || !formData.specialty}
                                    className="bg-[#FABE01] text-black font-bold h-12 px-8 rounded-sm hover:bg-[#d4a001]"
                                >
                                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "ENVIAR APLICAÇÃO"}
                                </Button>
                                <button onClick={() => setIsTypingOther(false)} className="text-zinc-600 hover:text-white underline text-xs uppercase tracking-wider ml-4">
                                  Voltar para lista
                                </button>
                              </div>
                            </div>
                        )}
                      </div>
                  )}
                </div>
              </div>
          )}
        </div>
      </section>
  );
};