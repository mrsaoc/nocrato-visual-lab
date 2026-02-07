import logo from "@/assets/logo.png";
import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">

        {/* Efeito de brilho no fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FABE01]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Coluna 1: Sobre */}
            <div className="space-y-6">
              <img
                  src={logo}
                  alt="Logo Brício Marketing"
                  className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
              <p className="text-zinc-400 text-sm leading-relaxed">
                Estratégias de marketing digital especializadas para a área da saúde. Transformamos sua autoridade médica em uma agenda lotada de pacientes particulares.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-[#FABE01] hover:text-black transition-all border border-zinc-800">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-[#FABE01] hover:text-black transition-all border border-zinc-800">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-[#FABE01] hover:text-black transition-all border border-zinc-800">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Coluna 2: Navegação (IDs CORRIGIDOS) */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FABE01]" />
                Navegação
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="#hero" className="text-zinc-400 hover:text-[#FABE01] text-sm flex items-center gap-2 transition-colors group">
                    <ArrowRight className="w-3 h-3 text-[#FABE01] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Início
                  </a>
                </li>
                <li>
                  <a href="#method" className="text-zinc-400 hover:text-[#FABE01] text-sm flex items-center gap-2 transition-colors group">
                    <ArrowRight className="w-3 h-3 text-[#FABE01] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Método PAEV
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-zinc-400 hover:text-[#FABE01] text-sm flex items-center gap-2 transition-colors group">
                    <ArrowRight className="w-3 h-3 text-[#FABE01] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-zinc-400 hover:text-[#FABE01] text-sm flex items-center gap-2 transition-colors group">
                    <ArrowRight className="w-3 h-3 text-[#FABE01] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-zinc-400 hover:text-[#FABE01] text-sm flex items-center gap-2 transition-colors group">
                    <ArrowRight className="w-3 h-3 text-[#FABE01] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Depoimentos
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Serviços (Apenas Lista Visual) */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FABE01]" />
                Especialidades
              </h3>
              <ul className="space-y-4">
                {['Tráfego Pago', 'Gestão de Redes Sociais', 'Branding Médico', 'Criação de Sites', 'Consultoria de Vendas'].map((item) => (
                    <li key={item}>
                  <span className="text-zinc-400 text-sm hover:text-white cursor-default transition-colors">
                    {item}
                  </span>
                    </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4: Contato */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FABE01]" />
                Fale Conosco
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FABE01] shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-sm">
                  Santos, SP - Brasil
                </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FABE01] shrink-0" />
                  <a href="https://wa.me/5513991187759" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white text-sm transition-colors">
                    (13) 99118-7759
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FABE01] shrink-0" />
                  <a href="mailto:contato@briciomarketing.com.br" className="text-zinc-400 hover:text-white text-sm transition-colors">
                    contato@briciomarketing.com.br
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Rodapé Inferior */}
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-xs text-center md:text-left">
              &copy; {currentYear} Brício Marketing Médico. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-500 hover:text-[#FABE01] text-xs transition-colors">Políticas de Privacidade</a>
              <a href="#" className="text-zinc-500 hover:text-[#FABE01] text-xs transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
  );
};