import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { ArrowRight, GraduationCap, Palette, Wrench, Coins, BookOpen, Users2 } from "lucide-react";
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
        {/* Hero Section com Vídeo Background */}
        <section className="py-20 md:py-32 relative overflow-hidden min-h-screen flex items-center">
          {/* Vídeo Background do Universo */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="/universe-background.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay escuro para melhorar legibilidade */}
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Caixa semi-transparente para destacar conteúdo */}
              <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  Domine a <span className="text-primary">Economia Digital</span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground">
                  A comunidade de elite para creators, builders e investidores da nova economia
                </p>
                <p className="text-lg text-foreground/90">
                  Aprenda sobre <strong className="text-foreground">stablecoins</strong>, <strong className="text-foreground">gig economy</strong>, <strong className="text-foreground">economia criativa</strong> e <strong className="text-foreground">edtech</strong>. Aceite o Desafio da Garrafa e prove que você pertence aqui.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="#desafio">Aceitar o Desafio</a>
                  </Button>
                  <Button size="lg" variant="ghost" className="backdrop-blur-sm" asChild>
                    <a href="#sobre">Explorar a Comunidade</a>
                  </Button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desafio da Garrafa Section */}
        <section id="desafio" className="py-20 bg-card/30 relative overflow-hidden">
          <div className="container relative">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  O Desafio da Garrafa
                </h2>
                <p className="text-xl text-muted-foreground">
                  Seu Ritual de Entrada na Economia Digital
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Esta é uma comunidade seletiva. Mostre sua <strong className="text-foreground">criatividade</strong>, <strong className="text-foreground">pensamento crítico</strong> e <strong className="text-foreground">domínio da economia digital</strong>.
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
                      Toda semana, um novo tema sobre economia digital: stablecoins, DeFi, gig economy, creators, edtech
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

        {/* Sobre Section - Economia Digital */}
        <section id="sobre" className="py-20 relative">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">
                  A Comunidade da Economia Digital
                </h2>
                <p className="text-xl text-muted-foreground">
                  Conectando creators, builders e investidores que estão moldando o futuro da economia criativa e gig economy
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Academia EdTech</h3>
                  <p className="text-muted-foreground">
                    Cursos, cases e análises sobre stablecoins, DeFi, pagamentos cross-border e economia digital
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Palette className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Trilha Creator</h3>
                  <p className="text-muted-foreground">
                    Domine a economia criativa: criação de conteúdo, monetização e gig economy para creators
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Trilha Builder</h3>
                  <p className="text-muted-foreground">
                    Construa produtos inovadores na economia digital: stablecoins, DeFi e infraestrutura Web3
                  </p>
                </div>
              </div>

              {/* Vídeo da Garrafa Girando */}
              <div className="flex justify-center">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="h-48 object-contain opacity-60"
                >
                  <source src="/bottle-video-2.mp4" type="video/mp4" />
                </video>
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
                  Sua Jornada na Economia Digital
                </h2>
                <p className="text-xl text-muted-foreground">
                  Do Desafio da Garrafa às Operações de Elite
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-6 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comece aceitando o <strong className="text-foreground">Desafio da Garrafa</strong> e torne-se Recruta. 
                  Escolha sua trilha (Creator ou Builder), aprenda sobre <strong className="text-foreground">stablecoins</strong>, <strong className="text-foreground">gig economy</strong> e <strong className="text-foreground">economia criativa</strong>. 
                  Complete missões para ganhar patentes e acesso a conteúdo exclusivo. 
                  Evolua até se tornar Elite e ter acesso a Operações de Elite, network premium e oportunidades na economia digital.
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
                  a: "É um ritual de entrada criativo onde você cria um vídeo de até 60 segundos explicando um tema da economia digital (stablecoins, DeFi, gig economy, etc). É nossa forma de identificar pessoas com pensamento crítico e capacidade de comunicação."
                },
                {
                  q: "Quanto custa para participar?",
                  a: "A participação na Base XYZ é gratuita. Nosso foco é em qualidade, não em quantidade. Você só precisa completar o Desafio da Garrafa para entrar."
                },
                {
                  q: "O que vou aprender sobre economia digital?",
                  a: "Você terá acesso a conteúdo sobre stablecoins, DeFi, economia criativa, gig economy, edtech, pagamentos cross-border, Web3 e muito mais. Tudo com foco prático e aplicável."
                },
                {
                  q: "Posso participar dos dois trilhas (Creator e Builder)?",
                  a: "Sim! Você pode escolher uma trilha principal, mas terá acesso ao conteúdo de ambas. A Trilha Creator foca em economia criativa e gig economy, enquanto a Trilha Builder foca em construção de produtos na economia digital."
                },
                {
                  q: "O que são Operações de Elite?",
                  a: "São oportunidades exclusivas na economia digital: projetos reais com stablecoins, deals de investimento, parcerias estratégicas e acesso a network premium. Disponível apenas para membros que alcançaram as patentes mais altas."
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
                Pronto para Dominar a Economia Digital?
              </h2>
              <p className="text-xl text-muted-foreground">
                Junte-se à elite dos creators e builders. Comece agora.
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
                Receba atualizações sobre economia digital
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
