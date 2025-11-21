import { useState } from "react";
import { useLocation } from "wouter";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const funMessages = [
  {
    title: "🎯 Oferta Exclusiva de Entrada",
    message: "Você está prestes a se cadastrar no programa Base XYZ. Esta é sua chance única de entrar direto como Champion!",
    buttonText: "Entendi, continuar"
  },
  {
    title: "⚡ Desafio da Garrafa = Acesso Champion",
    message: "Envie seu vídeo de 60 segundos em até 7 dias após o cadastro e entre direto como Champion, pulando todos os níveis iniciais e ganhando acesso imediato às Operações de Elite.",
    buttonText: "Quero essa vantagem!"
  },
  {
    title: "🚀 Pronto para começar?",
    message: "Recapitulando: Cadastro → 7 dias para enviar vídeo → Entrada direta como Champion. Não perca essa oportunidade exclusiva!",
    buttonText: "Fazer Cadastro Agora",
    final: true
  }
];

interface FunCTAPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FunCTAPopup({ isOpen, onClose }: FunCTAPopupProps) {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const currentMessage = funMessages[currentStep];

  const handleNext = () => {
    if (currentMessage.final) {
      // Última mensagem - redireciona para cadastro
      onClose();
      setLocation('/cadastro');
    } else {
      // Próxima mensagem
      setCurrentStep(prev => Math.min(prev + 1, funMessages.length - 1));
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)'
      }}
      onClick={handleClose}
    >
      <div 
        className="relative max-w-md w-full p-8 rounded-2xl animate-in fade-in zoom-in duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(10, 10, 11, 0.95), rgba(20, 10, 30, 0.95))',
          border: '2px solid',
          borderImage: 'linear-gradient(135deg, #6F3BFF, #00D9FF, #8C52FF) 1',
          boxShadow: '0 0 60px rgba(111, 59, 255, 0.4), inset 0 0 40px rgba(111, 59, 255, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg transition-colors hover:bg-white/10"
        >
          <X className="h-5 w-5" style={{ color: '#A1A1A1' }} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div 
            className="h-16 w-16 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #6F3BFF, #8C52FF)',
              boxShadow: '0 0 24px rgba(140, 82, 255, 0.5)'
            }}
          >
            <Sparkles className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 
          className="text-2xl font-bold text-center mb-4"
          style={{ color: '#FFFFFF' }}
        >
          {currentMessage.title}
        </h3>

        {/* Message */}
        <p 
          className="text-center mb-8"
          style={{ color: '#C7C7C7', fontSize: '1.1rem' }}
        >
          {currentMessage.message}
        </p>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          {funMessages.map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-full transition-all"
              style={{
                background: index === currentStep ? '#6F3BFF' : '#333',
                transform: index === currentStep ? 'scale(1.3)' : 'scale(1)'
              }}
            />
          ))}
        </div>

        {/* Button */}
        <Button
          onClick={handleNext}
          size="lg"
          className="w-full text-lg font-semibold"
          style={{
            background: 'linear-gradient(90deg, #6F3BFF, #8C52FF)',
            boxShadow: '0 0 20px rgba(140, 82, 255, 0.5)'
          }}
        >
          {currentMessage.buttonText}
        </Button>
      </div>
    </div>
  );
}
