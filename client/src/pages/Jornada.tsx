import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO } from "@/const";
import { Palette, Wrench, ArrowRight } from "lucide-react";

export default function Jornada() {
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
            backgroundImage: 'url(/images/hero-abstract-1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container max-w-5xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#E6E6E6' }}>
              Sua Jornada na Base XYZ
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#A1A1A1' }}>
              Escolha sua trilha e domine a economia digital
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 py-20">
        <div className="container max-w-5xl">

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#E6E6E6' }}>
                  Trilha Creator
                </h2>
                <p className="text-lg mb-6" style={{ color: '#C7C7C7' }}>
                  Domine a economia criativa: criação de conteúdo, monetização e gig economy para creators
                </p>
                <ul className="space-y-3 text-sm" style={{ color: '#C7C7C7' }}>
                  <li>• Economia criativa e UGC</li>
                  <li>• Monetização de conteúdo</li>
                  <li>• Social media e crescimento</li>
                  <li>• Gig economy para creators</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#E6E6E6' }}>
                  Trilha Builder
                </h2>
                <p className="text-lg mb-6" style={{ color: '#C7C7C7' }}>
                  Construa produtos inovadores na economia digital: stablecoins, DeFi e infraestrutura Web3
                </p>
                <ul className="space-y-3 text-sm" style={{ color: '#C7C7C7' }}>
                  <li>• Stablecoins e DeFi</li>
                  <li>• Infraestrutura Web3</li>
                  <li>• Automações e produtos digitais</li>
                  <li>• Pagamentos cross-border</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border/50 mb-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#E6E6E6' }}>
                Você pode participar das duas trilhas!
              </h3>
              <p className="text-lg" style={{ color: '#C7C7C7' }}>
                Escolha uma trilha principal, mas tenha acesso ao conteúdo de ambas
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" asChild style={{
              background: 'linear-gradient(90deg, #6F3BFF, #8C52FF)',
              boxShadow: '0 0 16px rgba(140, 82, 255, 0.4)'
            }}>
              <a href="/cadastro">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
