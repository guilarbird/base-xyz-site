import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useState, useEffect } from "react";
import { Bot, ArrowRight, MessageCircle } from "lucide-react";
import { useLocation } from "wouter";

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  delay?: number;
}

export default function Onboarding() {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userData, setUserData] = useState<any>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Carregar dados do cadastro
    const data = localStorage.getItem('cadastro_base_xyz');
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  const conversationFlow: Message[] = [
    {
      id: 1,
      text: `Olá${userData?.nome ? `, ${userData.nome.split(' ')[0]}` : ''}! 👋 Sou a Sentinela Base XYZ, sua guia nesta jornada.`,
      sender: 'bot',
      delay: 500
    },
    {
      id: 2,
      text: "Bem-vindo à **Base XYZ** — uma comunidade de elite para creators e builders que estão moldando o futuro da economia digital.",
      sender: 'bot',
      delay: 2000
    },
    {
      id: 3,
      text: "Aqui você vai aprender sobre **stablecoins**, **DeFi**, **gig economy**, **economia criativa** e muito mais.",
      sender: 'bot',
      delay: 3500
    },
    {
      id: 4,
      text: "⚡ **Importante:** Não trazemos investidores. Conectamos creators e builders a **projetos globais** e organizamos **experiências exclusivas** para a comunidade.",
      sender: 'bot',
      delay: 5500
    },
    {
      id: 5,
      text: userData?.trilhas?.includes('Creator') && userData?.trilhas?.includes('Builder')
        ? "Vi que você escolheu **ambas as trilhas** — excelente! Você terá acesso completo a todo o conteúdo."
        : userData?.trilhas?.includes('Creator')
        ? "Vi que você escolheu a **Trilha Creator**. Você vai dominar economia criativa, criação de conteúdo, monetização e gig economy."
        : userData?.trilhas?.includes('Builder')
        ? "Vi que você escolheu a **Trilha Builder**. Você vai construir produtos inovadores com stablecoins, DeFi e infraestrutura Web3."
        : "Você terá acesso às duas trilhas: **Creator** e **Builder**.",
      sender: 'bot',
      delay: 7500
    },
    {
      id: 6,
      text: "🎯 **Sua primeira missão:** Completar o **Desafio da Garrafa** — nosso ritual de entrada criativo.",
      sender: 'bot',
      delay: 9500
    },
    {
      id: 7,
      text: "Você vai criar um vídeo de até 60 segundos explicando um tema da economia digital de forma criativa e acessível.",
      sender: 'bot',
      delay: 11000
    },
    {
      id: 8,
      text: "Pronto para começar? 🚀",
      sender: 'bot',
      delay: 12500
    }
  ];

  useEffect(() => {
    if (currentStep < conversationFlow.length) {
      const message = conversationFlow[currentStep];
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, message]);
        setCurrentStep(prev => prev + 1);
      }, message.delay || 0);

      return () => clearTimeout(timer);
    } else if (currentStep === conversationFlow.length && !isComplete) {
      setIsComplete(true);
    }
  }, [currentStep, userData]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/20 backdrop-blur-md sticky top-0 z-50 bg-black/80">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <img src={APP_LOGO} alt="BASE XYZ" className="h-6 w-6" />
            <span className="font-bold text-lg tracking-tight">BASE XYZ</span>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          {/* Chat Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#E6E6E6' }}>
              Sentinela Base XYZ
            </h1>
            <p className="text-sm" style={{ color: '#A1A1A1' }}>
              Seu guia de onboarding
            </p>
          </div>

          {/* Chat Messages */}
          <Card className="bg-card border-border/50 mb-6">
            <CardContent className="p-6 space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-500`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.sender === 'bot'
                        ? 'bg-primary/10 border border-primary/20'
                        : 'bg-secondary'
                    }`}
                  >
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: '#E6E6E6' }}
                      dangerouslySetInnerHTML={{ 
                        __html: message.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                      }}
                    />
                  </div>
                </div>
              ))}
              
              {currentStep < conversationFlow.length && (
                <div className="flex justify-start">
                  <div className="bg-primary/10 border border-primary/20 px-4 py-3 rounded-2xl">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          {isComplete && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Button
                size="lg"
                className="w-full"
                onClick={() => setLocation('/desafio')}
                style={{
                  background: 'linear-gradient(90deg, #6F3BFF, #8C52FF)',
                  boxShadow: '0 0 16px rgba(140, 82, 255, 0.4)'
                }}
              >
                Começar Desafio da Garrafa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="grid md:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = 'https://www.base-xyz.com'}
                  className="border-primary/50 hover:bg-primary/10"
                >
                  Entrar na Comunidade
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Acabei de me cadastrar na Base XYZ', '_blank')}
                  className="border-primary/50 hover:bg-primary/10"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Receber no WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
