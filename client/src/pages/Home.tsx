import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { ArrowRight, Wine, GraduationCap, Palette, Wrench, CheckCircle2, Sparkles, Target, Users } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/20 backdrop-blur-md sticky top-0 z-50 bg-black/80">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <img src={APP_LOGO} alt="BASE XYZ" className="h-6 w-6" />
            <span className="font-bold text-lg tracking-tight">BASE XYZ</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#desafio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Desafio</a>
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
            <a href="#jornada" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Jornada</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-sm" asChild>
              <a href="https://www.base-xyz.com" target="_blank" rel="noopener noreferrer">Entrar</a>
            </Button>
            <Button size="sm" className="text-sm" asChild>
              <a href="#desafio">Participar</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section com Garrafa */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Lado Esquerdo - Texto */}
              <div className="space-y-8">
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  Comunidade de Elite
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  Bem-vindo à <span className="text-primary">Base XYZ</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  A comunidade de elite para criadores e construtores da economia digital
                </p>
                <p className="text-lg text-muted-foreground">
                  Não aceitamos qualquer um. Aceite o <strong className="text-foreground">Desafio da Garrafa</strong> e prove que você pertence aqui.
                </p>

                <Button size="lg" variant="ghost" className="text-lg" asChild>
                  <a href="#sobre">Ou explore a comunidade primeiro</a>
                </Button>
              </div>

              {/* Lado Direito - Garrafa */}
              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                  <img 
                    src="/bottle-black.png" 
                    alt="Garrafa Base XYZ" 
                    className="relative z-10 w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desafio da Garrafa Section */}
        <section id="desafio" className="py-20 bg-card/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
            <img src="/bottle-white.png" alt="" className="h-full object-contain" />
          </div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  O Desafio da Garrafa
                </h2>
                <p className="text-xl text-muted-foreground">
                  Seu Ritual de Entrada
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Não aceitamos qualquer um. Mostre sua <strong className="text-foreground">criatividade</strong>, <strong className="text-foreground">pensamento crítico</strong> e <strong className="text-foreground">capacidade de execução</strong>.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card border-border/50 hover:border-primary/50 transition-all">
                  <CardContent className="pt-6 space-y-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      1
                    </div>
                    <h3 className="font-semibold text-lg">Receba um Tema</h3>
                    <p className="text-sm text-muted-foreground">
                      Toda semana, um novo tema sobre economia digital (stablecoins, DeFi, pagamentos cross-border)
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/50 hover:border-primary/50 transition-all">
                  <CardContent className="pt-6 space-y-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      2
                    </div>
                    <h3 className="font-semibold text-lg">Crie um Vídeo</h3>
                    <p className="text-sm text-muted-foreground">
                      Explique o tema em até 60 segundos de forma criativa e acessível
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/50 hover:border-primary/50 transition-all">
                  <CardContent className="pt-6 space-y-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      3
                    </div>
                    <h3 className="font-semibold text-lg">Seja Avaliado</h3>
                    <p className="text-sm text-muted-foreground">
                      Sua garrafa será avaliada pela comunidade e moderadores
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-8">
                <Button size="lg" asChild>
                  <a href="#desafio">
                    Aceitar o Desafio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section com Garrafas */}
        <section id="sobre" className="py-20 relative">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Uma Comunidade de Elite para a Economia Digital
                </h2>
                <p className="text-xl text-muted-foreground">
                  Conectando criadores, construtores e investidores que estão moldando o futuro
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Academia</h3>
                  <p className="text-muted-foreground">
                    Cursos, cases e análises de mercado sobre cripto e economia digital
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Palette className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Trilha Creator</h3>
                  <p className="text-muted-foreground">
                    Melhore seus métodos de criação de conteúdo e monetização
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Trilha Builder</h3>
                  <p className="text-muted-foreground">
                    Melhore suas oportunidades e construa produtos inovadores
                  </p>
                </div>
              </div>

              {/* Garrafas */}
              <div className="flex justify-center gap-8 opacity-30">
                <img src="/bottle-green.png" alt="" className="h-32 object-contain" />
                <img src="/bottle-blue.png" alt="" className="h-32 object-contain" />
                <img src="/bottle-red.png" alt="" className="h-32 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Jornada Section */}
        <section id="jornada" className="py-20 bg-card/30">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Sua Jornada na Base XYZ
                </h2>
                <p className="text-xl text-muted-foreground">
                  Um caminho claro de progressão e reconhecimento
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-6 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comece aceitando o <strong className="text-foreground">Desafio da Garrafa</strong> e torne-se Recruta. 
                  Escolha sua trilha (Creator ou Builder), complete missões para ganhar patentes e acesso a conteúdo exclusivo. 
                  Evolua até se tornar Elite e ter acesso a Operações de Elite e network premium.
                </p>
              </div>

              <div className="text-center pt-8">
                <Button size="lg" asChild>
                  <a href="#desafio" className="inline-flex items-center">
                    Começar Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Perguntas Frequentes
                </h2>
              </div>

              <FAQAccordion items={[
                {
                  q: "O que é o Desafio da Garrafa?",
                  a: "É um ritual de entrada criativo onde você cria um vídeo de até 60 segundos explicando um tema da economia digital. É nossa forma de identificar pessoas com pensamento crítico e capacidade de comunicação."
                },
                {
                  q: "Quanto custa para participar?",
                  a: "A participação na Base XYZ é gratuita. Nosso foco é em qualidade, não em quantidade. Você só precisa completar o Desafio da Garrafa para entrar."
                },
                {
                  q: "Quanto tempo leva para completar uma missão?",
                  a: "Cada missão é projetada para ser completada em 1-2 semanas, dependendo do seu ritmo. Você pode avançar no seu próprio tempo, mas recomendamos estar ativo para aproveitar as interações da comunidade."
                },
                {
                  q: "Posso participar dos dois trilhas (Creator e Builder)?",
                  a: "Sim! Você pode escolher uma trilha principal, mas terá acesso ao conteúdo de ambas. A diferença está nas missões específicas e no network de cada trilha."
                },
                {
                  q: "O que são Operações de Elite?",
                  a: "São oportunidades exclusivas, incluindo projetos reais, deals de investimento, parcerias estratégicas e acesso a network premium. Disponível apenas para membros que alcançaram as patentes mais altas."
                }
              ]} />
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10">
              <img src="/bottle-green.png" alt="" className="h-48 object-contain opacity-50" />
            </div>
            <div className="absolute bottom-10 right-10">
              <img src="/bottle-red.png" alt="" className="h-48 object-contain opacity-50" />
            </div>
          </div>
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pronto para Aceitar o Desafio?
              </h2>
              <p className="text-xl text-muted-foreground">
                Junte-se à elite da economia digital. Comece agora.
              </p>
        <div className="max-w-md mx-auto">
          <NewsletterForm />
        </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/20 py-12 bg-card/20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={APP_LOGO} alt={APP_TITLE} className="h-6 w-6" />
                <span className="font-bold">{APP_TITLE}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Comunidade de elite para a economia digital
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Comunidade</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#desafio" className="hover:text-foreground transition-colors">Desafio da Garrafa</a></li>
                <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a></li>
                <li><a href="#jornada" className="hover:text-foreground transition-colors">Jornada</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://www.base-xyz.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Entrar na Comunidade</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Newsletter</h4>
              <p className="text-sm text-muted-foreground">
                Receba atualizações exclusivas
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>© 2025 Base XYZ. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
