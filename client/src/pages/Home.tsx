import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { ArrowRight, Wine, GraduationCap, Palette, Wrench, CheckCircle2, Sparkles, Target, Users } from "lucide-react";
import SignupForm from "@/components/SignupForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/95">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-8" />
            <span className="font-bold text-xl">{APP_TITLE}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#desafio" className="text-sm hover:text-primary transition-colors">Desafio</a>
            <a href="#sobre" className="text-sm hover:text-primary transition-colors">Sobre</a>
            <a href="#jornada" className="text-sm hover:text-primary transition-colors">Jornada</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.base-xyz.com" target="_blank" rel="noopener noreferrer">Fazer Login</a>
            </Button>
            <Button size="sm" asChild>
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
                <div className="max-w-md">
                  <SignupForm />
                </div>
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
                <div className="inline-flex items-center gap-2 text-primary mb-2">
                  <Wine className="h-8 w-8" />
                  <h2 className="text-3xl md:text-4xl font-bold">O Desafio da Garrafa</h2>
                </div>
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
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A Base XYZ é mais que uma comunidade. É uma <strong className="text-foreground">academia</strong>, um <strong className="text-foreground">campo de treinamento</strong> e uma <strong className="text-foreground">rede de elite</strong> para criadores e construtores da economia digital.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-card border-border/50 hover:border-primary/50 transition-all group">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="relative h-32 flex items-center justify-center">
                      <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full group-hover:bg-primary/10 transition-all" />
                      <GraduationCap className="h-16 w-16 text-primary relative z-10" />
                    </div>
                    <h3 className="font-semibold text-xl">Academia</h3>
                    <p className="text-muted-foreground">
                      Cursos, teses e análises de mercado sobre a economia digital
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/50 hover:border-primary/50 transition-all group">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="relative h-32 flex items-center justify-center">
                      <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full group-hover:bg-primary/10 transition-all" />
                      <Palette className="h-16 w-16 text-primary relative z-10" />
                    </div>
                    <h3 className="font-semibold text-xl">Trilha Creator</h3>
                    <p className="text-muted-foreground">
                      Missões para criadores de conteúdo e comunicadores
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/50 hover:border-primary/50 transition-all group">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="relative h-32 flex items-center justify-center">
                      <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full group-hover:bg-primary/10 transition-all" />
                      <Wrench className="h-16 w-16 text-primary relative z-10" />
                    </div>
                    <h3 className="font-semibold text-xl">Trilha Builder</h3>
                    <p className="text-muted-foreground">
                      Missões para desenvolvedores e construtores técnicos
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Garrafas em linha */}
              <div className="mt-16 flex items-center justify-center gap-8 opacity-40">
                <img src="/bottle-white.png" alt="" className="h-32 object-contain" />
                <img src="/bottle-silver.png" alt="" className="h-40 object-contain" />
                <img src="/bottle-black.png" alt="" className="h-32 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Jornada Section */}
        <section id="jornada" className="py-20 bg-card/30">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Sua Jornada na Base XYZ
                </h2>
                <p className="text-lg text-muted-foreground">
                  Um caminho claro de progressão e reconhecimento
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { step: "1", title: "Aceite o Desafio", desc: "Complete o Desafio da Garrafa", icon: Target },
                  { step: "2", title: "Torne-se Recruta", desc: "Acesso à comunidade e conteúdo básico", icon: Users },
                  { step: "3", title: "Escolha sua Trilha", desc: "Creator ou Builder", icon: Sparkles },
                  { step: "4", title: "Complete Missões", desc: "Ganhe patentes e acesso a conteúdo exclusivo", icon: CheckCircle2 },
                  { step: "5", title: "Torne-se Elite", desc: "Acesso a Operações de Elite e network premium", icon: GraduationCap },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Card key={i} className="bg-card border-border/50 hover:border-primary/50 transition-all group">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0 group-hover:bg-primary/20 transition-all">
                            {item.step}
                          </div>
                          <div className="flex-1 space-y-1">
                            <h3 className="font-semibold text-lg flex items-center gap-2">
                              {item.title}
                              <Icon className="h-5 w-5 text-primary/50" />
                            </h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="text-center pt-8">
                <Button size="lg" asChild>
                  <a href="#desafio">
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

              <div className="space-y-4">
                {[
                  {
                    q: "O que é o Desafio da Garrafa?",
                    a: "É um ritual de entrada criativo onde você cria um vídeo de até 60 segundos explicando um tema da economia digital. É nossa forma de identificar pessoas com pensamento crítico e capacidade de comunicação."
                  },
                  {
                    q: "Quanto custa para participar?",
                    a: "A participação na Base XYZ é gratuita. Nosso foco é em qualidade, não em quantidade."
                  },
                  {
                    q: "Quanto tempo leva para completar uma missão?",
                    a: "Varia de acordo com a missão. Algumas podem ser completadas em algumas horas, outras levam semanas. Você avança no seu próprio ritmo."
                  },
                  {
                    q: "Posso participar das duas trilhas (Creator e Builder)?",
                    a: "Sim! Você pode escolher uma trilha principal, mas pode participar de missões de ambas as trilhas."
                  },
                  {
                    q: "O que são Operações de Elite?",
                    a: "São missões avançadas para membros que demonstraram excelência. Incluem projetos reais, mentorias e oportunidades de trabalho remunerado."
                  },
                ].map((item, i) => (
                  <Card key={i} className="bg-card border-border/50 hover:border-primary/50 transition-all">
                    <CardContent className="pt-6 space-y-3">
                      <h3 className="font-semibold text-lg flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        {item.q}
                      </h3>
                      <p className="text-muted-foreground pl-7">{item.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final com Garrafa */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent border-y border-primary/20 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1/4 opacity-10">
            <img src="/bottle-silver.png" alt="" className="h-full object-contain" />
          </div>
          <div className="absolute right-0 top-0 h-full w-1/4 opacity-10">
            <img src="/bottle-black.png" alt="" className="h-full object-contain" />
          </div>
          <div className="container relative">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pronto para Aceitar o Desafio?
              </h2>
              <p className="text-xl text-muted-foreground">
                Junte-se à elite da economia digital. Comece agora.
              </p>
              <div className="max-w-md mx-auto">
                <SignupForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-card/20">
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
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacidade</a></li>
              </ul>
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
