import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO } from "@/const";
import { Lightbulb, Video, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Desafio() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/20 backdrop-blur-md sticky top-0 z-50 bg-black/80">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <img src={APP_LOGO} alt="BASE XYZ" className="h-6 w-6" />
            <span className="font-bold text-lg tracking-tight">BASE XYZ</span>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <a href="/">Voltar</a>
          </Button>
        </div>
      </header>

      <main className="flex-1 py-20">
        <div className="container max-w-5xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#E6E6E6' }}>
              Desafio da Garrafa
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#A1A1A1' }}>
              Seu ritual de entrada criativo para a Base XYZ
            </p>
          </div>

          {/* O que é */}
          <Card className="bg-card border-border/50 mb-12">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#E6E6E6' }}>
                O que é o Desafio da Garrafa?
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#C7C7C7' }}>
                É um ritual de entrada criativo onde você cria um vídeo de até <strong style={{ color: '#E6E6E6' }}>60 segundos</strong> explicando um tema da economia digital de forma criativa e acessível.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#C7C7C7' }}>
                É nossa forma de identificar pessoas com <strong style={{ color: '#E6E6E6' }}>pensamento crítico</strong>, <strong style={{ color: '#E6E6E6' }}>capacidade de comunicação</strong> e <strong style={{ color: '#E6E6E6' }}>criatividade</strong>.
              </p>
            </CardContent>
          </Card>

          {/* Como funciona */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#E6E6E6' }}>
              Como Funciona
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: "1. Receba um Tema",
                  description: "Toda semana, um novo tema sobre economia digital: stablecoins, DeFi, gig economy, creators, edtech"
                },
                {
                  icon: Video,
                  title: "2. Crie um Vídeo",
                  description: "Explique o tema em até 60 segundos de forma criativa e acessível"
                },
                {
                  icon: Award,
                  title: "3. Seja Avaliado",
                  description: "Sua garrafa será avaliada pela comunidade e moderadores"
                }
              ].map((step, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1"
                  style={{
                    background: '#111',
                    boxShadow: '0 0 0 rgba(140, 82, 255, 0)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(140, 82, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 rgba(140, 82, 255, 0)';
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3" style={{ color: '#E6E6E6' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#C7C7C7' }}>
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Critérios de Avaliação */}
          <Card className="bg-card border-border/50 mb-12">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#E6E6E6' }}>
                Critérios de Avaliação
              </h2>
              <div className="space-y-4">
                {[
                  "Clareza na explicação do tema",
                  "Criatividade na abordagem",
                  "Capacidade de simplificar conceitos complexos",
                  "Qualidade de produção (não precisa ser profissional, mas caprichado)",
                  "Autenticidade e personalidade"
                ].map((criterio, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg" style={{ color: '#C7C7C7' }}>
                      {criterio}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              asChild
              style={{
                background: 'linear-gradient(90deg, #6F3BFF, #8C52FF)',
                boxShadow: '0 0 16px rgba(140, 82, 255, 0.4)'
              }}
            >
              <a href="/cadastro">
                Aceitar o Desafio
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm mt-4" style={{ color: '#A1A1A1' }}>
              Já é membro? <a href="https://www.base-xyz.com" className="text-primary hover:underline">Entrar na comunidade</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
