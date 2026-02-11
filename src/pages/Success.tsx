import { Button } from "@/components/ui/button";
import { CheckCircle, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center px-4 text-center">

            {/* Ícone Animado */}
            <div className="mb-8 p-6 rounded-full bg-[#FABE01]/10 animate-in zoom-in duration-500">
                <CheckCircle className="w-24 h-24 text-[#FABE01]" />
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                Cadastro Recebido!
            </h1>

            {/* Mensagem */}
            <p className="text-zinc-400 text-lg max-w-lg mb-10 leading-relaxed">
                Seus dados foram enviados com sucesso para nossa equipe. <br />
                Em breve, um de nossos especialistas entrará em contato para agendar sua consultoria.
            </p>

            {/* Botão Voltar */}
            <Button
                asChild
                className="bg-[#FABE01] hover:bg-[#FABE01]/90 text-black font-bold h-12 px-8 rounded-sm transition-all"
            >
                <Link to="/">
                    <Home className="mr-2 h-5 w-5" />
                    Voltar para o Início
                </Link>
            </Button>

            {/* Footerzinho */}
            <p className="mt-12 text-zinc-600 text-sm">
                © {new Date().getFullYear()} Brício Marketing Médico
            </p>
        </div>
    );
};

export default Success;