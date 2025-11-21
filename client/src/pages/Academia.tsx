import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO } from "@/const";
import { BookOpen, Video, FileText, Users, ArrowRight } from "lucide-react";

export default function Academia() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border/20 backdrop-blur-md sticky top-0 z-50 bg-black/80">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <img src={APP_LOGO} alt="BASE XYZ" className="h-6 w-6" />
            <span className="font-bold text-lg tracking-tight">BASE XYZ</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
            Voltar
          </Button>
        </div>
      </header>

      {/* Hero com imagem */}
      <div 
        className="relative py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0A0A0B 0%, #1A0A2E 100%)'
        }}
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/hero-abstract-2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container max-w-5xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#E6E6E6' }}>
              Academia EdTech
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#A1A1A1' }}>
              Cursos, cases e análises sobre stablecoins, DeFi, pagamentos cross-border e inovação digital
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 py-20">
        <div className="container max-w-5xl">

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: BookOpen,
                title: "Cursos Práticos",
                description: "Aprenda stablecoins, DeFi, Web3 e economia digital com foco em aplicação real"
              },
              {
                icon: Video,
                title: "Cases Reais",
                description: "Análises profundas de projetos e empresas que estão moldando a economia digital"
              },
              {
                icon: FileText,
                title: "Análises de Mercado",
                description: "Relatórios e insights sobre tendências em pagamentos, gig economy e edtech"
              },
              {
                icon: Users,
                title: "Comunidade Ativa",
                description: "Discussões, networking e colaboração com outros membros da Base XYZ"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="bg-card border-border/50 hover:border-primary/50 transition-all"
                style={{ background: '#111' }}
              >
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#E6E6E6' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#C7C7C7' }}>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border/50 mb-12">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#E6E6E6' }}>
                O que você vai aprender
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#E6E6E6' }}>
                    Stablecoins & DeFi
                  </h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#C7C7C7' }}>
                    <li>• Como funcionam as stablecoins</li>
                    <li>• Protocolos DeFi essenciais</li>
                    <li>• Casos de uso práticos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#E6E6E6' }}>
                    Economia Digital
                  </h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#C7C7C7' }}>
                    <li>• Gig economy e trabalho remoto</li>
                    <li>• Pagamentos cross-border</li>
                    <li>• Inovação em edtech</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" asChild style={{
              background: 'linear-gradient(90deg, #6F3BFF, #8C52FF)',
              boxShadow: '0 0 16px rgba(140, 82, 255, 0.4)'
            }}>
              <a href="/cadastro">
                Acessar Academia
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
