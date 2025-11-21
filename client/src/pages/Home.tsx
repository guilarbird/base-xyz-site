import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { ArrowRight, Lightbulb, Video, Award, BookOpen, Palette, Wrench } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import FAQAccordion from "@/components/FAQAccordion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  // Intersection Observer para animações de scroll
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      if (observerRef.current) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

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
            <a href="/desafio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Desafio</a>
            <a href="/academia" className="text-sm text-muted-foreground hover:text-primary transition-colors">Academia</a>
            <a href="/jornada" className="text-sm text-muted-foreground hover:text-primary transition-colors">Jornada</a>
            <a href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-sm" asChild>
              <a href="https://www.base-xyz.com" target="_blank" rel="noopener noreferrer">Entrar</a>
            </Button>
            <Button size="sm" className="text-sm" asChild>
              <a href="/cadastro">Participar</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section com Vídeo Background */}
        <section 
          className="py-20 md:py-32 relative overflow-hidden min-h-screen flex items-center"
          style={{ marginBottom: '72px' }}
        >
          {/* Vídeo Background do Universo */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.7, filter: 'brightness(1.1) saturate(1.2)' }}
          >
            <source src="/universe-background.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay escuro para melhorar legibilidade */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Efeito de energia vermelho/roxo pulsante */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 40%, rgba(220, 38, 38, 0.15) 0%, rgba(140, 82, 255, 0.1) 40%, transparent 70%)',
              animation: 'pulse 4s ease-in-out infinite'
            }}
          />
          
          {/* Vignette suave nas laterais */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)'
            }}
          />
          
          {/* Gradiente de transição para próxima seção */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-background/50 to-background" />
          
          <div className="container relative z-10">
            <div 
              className="max-w-3xl mx-auto text-center"
              data-animate="hero"
              style={{
                opacity: visibleSections.has('hero') ? 1 : 0,
                transform: visibleSections.has('hero') ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              {/* Caixa semi-transparente para destacar conteúdo */}
              <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative">
                {/* Glow roxo suave atrás do título */}
                <div 
                  className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none -z-10"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(140, 82, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(40px)'
                  }}
                />
                
                <div className="space-y-8">
                  <h1 
                    className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
                    style={{ color: '#E6E6E6' }}
                  >
                    Domine a <span className="text-primary">Economia Digital</span>
                  </h1>
                  <p 
                    className="text-xl md:text-2xl"
                    style={{ color: '#A1A1A1', marginTop: '24px' }}
                  >
                    A comunidade de elite para creators e builders da nova economia
                  </p>
                  <p 
                    className="text-lg max-w-2xl mx-auto"
                    style={{ color: '#C7C7C7', marginTop: '32px' }}
                  >
                    Aprenda sobre <strong style={{ color: '#E6E6E6' }}>stablecoins</strong>, <strong style={{ color: '#E6E6E6' }}>gig economy</strong>, <strong style={{ color: '#E6E6E6' }}>economia criativa</strong> e <strong style={{ color: '#E6E6E6' }}>edtech</strong>. Aceite o Desafio da Garrafa e prove que você pertence aqui.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ marginTop: '40px' }}>
                    <a 
                      href="/cadastro" 
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105"
                      style={{
                        background: 'linear-gradient(90deg, #6F3BFF, #8C52FF)',
                        boxShadow: '0 0 16px rgba(140, 82, 255, 0.4)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 24px rgba(140, 82, 255, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 16px rgba(140, 82, 255, 0.4)';
                      }}
                    >
                      Participar Agora
                      <ArrowRight className="h-5 w-5" />
                    </a>
                    <Button size="lg" variant="ghost" className="backdrop-blur-sm border border-white/20 hover:border-primary/50" asChild>
                      <a href="/jornada">Explorar Trilhas</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desafio da Garrafa Section */}
        <section 
          id="desafio" 
          className="relative"
          style={{ 
            paddingTop: '72px',
            paddingBottom: '72px'
          }}
        >
          {/* Gradiente sutil superior */}
          <div 
            className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(10,10,11,0.8) 0%, transparent 100%)'
            }}
          />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto space-y-12">
              <div 
                className="text-center space-y-6"
                data-animate="desafio-header"
                id="desafio-header"
                style={{
                  opacity: visibleSections.has('desafio-header') ? 1 : 0,
                  transform: visibleSections.has('desafio-header') ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
              >
                <h2 
                  className="text-3xl md:text-5xl font-bold"
                  style={{ color: '#E6E6E6' }}
                >
                  Seu Ritual de Entrada
                </h2>
                <p 
                  className="text-xl"
                  style={{ color: '#A1A1A1', marginTop: '24px' }}
                >
                  O Desafio da Garrafa
                </p>
                <p 
                  className="text-lg max-w-2xl mx-auto"
                  style={{ color: '#C7C7C7', marginTop: '32px' }}
                >
                  Esta é uma comunidade seletiva. Mostre sua <strong style={{ color: '#E6E6E6' }}>criatividade</strong>, <strong style={{ color: '#E6E6E6' }}>pensamento crítico</strong> e <strong style={{ color: '#E6E6E6' }}>domínio da economia digital</strong>.
                </p>
              </div>

              <div 
                className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                data-animate="desafio-cards"
                id="desafio-cards"
                style={{
                  opacity: visibleSections.has('desafio-cards') ? 1 : 0,
                  transform: visibleSections.has('desafio-cards') ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
                  marginTop: '40px'
                }}
              >
                {[
                  {
                    icon: Lightbulb,
                    title: "Receba um Tema",
                    description: "Toda semana, um novo tema sobre economia digital: stablecoins, DeFi, gig economy, creators, edtech"
                  },
                  {
                    icon: Video,
                    title: "Crie um Vídeo",
                    description: "Explique o tema em até 60 segundos de forma criativa e acessível"
                  },
                  {
                    icon: Award,
                    title: "Seja Avaliado",
                    description: "Sua garrafa será avaliada pela comunidade e moderadores"
                  }
                ].map((step, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 relative group"
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
                    <CardContent className="pt-8 pb-6 space-y-4 text-center">
                      <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto group-hover:bg-primary/20 transition-colors">
                        <step.icon className="h-7 w-7" />
                      </div>
                      <h3 
                        className="font-semibold text-lg"
                        style={{ color: '#E6E6E6', marginTop: '24px' }}
                      >
                        {step.title}
                      </h3>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: '#C7C7C7', marginTop: '16px' }}
                      >
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center" style={{ marginTop: '48px' }}>
                <a 
                  href="#desafio" 
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(90deg, #6F3BFF, #8C52FF)',
                    boxShadow: '0 0 16px rgba(140, 82, 255, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 24px rgba(140, 82, 255, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(140, 82, 255, 0.4)';
                  }}
                >
                  Aceitar o Desafio
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Gradiente sutil inferior */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: 'linear-gradient(0deg, rgba(10,10,11,0.8) 0%, transparent 100%)'
            }}
          />
        </section>

        {/* Vídeo da Garrafa Full-Width Section */}
        <section className="relative overflow-hidden" style={{ marginTop: '72px', marginBottom: '72px' }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-auto object-cover"
            style={{ mixBlendMode: 'screen' }}
          >
            <source src="/bottle-white-gold.mp4" type="video/mp4" />
          </video>
          {/* Overlay sutil para profundidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/30" />
          {/* Gradient fade superior para transição suave */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/60 to-transparent" />
          {/* Gradient fade inferior para transição suave */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </section>

        {/* Sobre Section - Comunidade de Elite */}
        <section 
          id="sobre" 
          className="relative"
          style={{ 
            paddingTop: '72px',
            paddingBottom: '72px'
          }}
        >
          {/* Glow roxo de fundo */}
          <div 
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(140, 82, 255, 0.08) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(60px)'
            }}
          />
          
          <div className="container relative">
            <div className="max-w-5xl mx-auto">
              <div 
                className="text-center space-y-6 mb-16"
                data-animate="sobre-header"
                id="sobre-header"
                style={{
                  opacity: visibleSections.has('sobre-header') ? 1 : 0,
                  transform: visibleSections.has('sobre-header') ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
              >
                <h2 
                  className="text-3xl md:text-5xl font-bold"
                  style={{ color: '#E6E6E6' }}
                >
                  Comunidade de Elite
                </h2>
                <p 
                  className="text-lg font-medium max-w-3xl mx-auto"
                  style={{ color: '#E6E6E6', marginTop: '16px' }}
                >
                  Um hub para quem constrói o futuro da economia digital no Brasil.
                </p>
                <p 
                  className="text-xl max-w-3xl mx-auto"
                  style={{ color: '#A1A1A1', marginTop: '24px' }}
                >
                  Conectando creators e builders a projetos globais — e organizando experiências exclusivas para a comunidade.
                </p>
              </div>

              <div 
                className="grid md:grid-cols-3 gap-8"
                data-animate="sobre-cards"
                id="sobre-cards"
                style={{
                  opacity: visibleSections.has('sobre-cards') ? 1 : 0,
                  transform: visibleSections.has('sobre-cards') ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
                  marginTop: '56px'
                }}
              >
                {[
                  {
                    icon: BookOpen,
                    title: "Academia EdTech",
                    description: "Cursos, cases e análises sobre stablecoins, DeFi, pagamentos cross-border e inovação digital."
                  },
                  {
                    icon: Palette,
                    title: "Trilha Creator",
                    description: "Domine a economia criativa: criação de conteúdo, monetização e gig economy para creators"
                  },
                  {
                    icon: Wrench,
                    title: "Trilha Builder",
                    description: "Construa produtos inovadores na economia digital: stablecoins, DeFi e infraestrutura Web3"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="text-center space-y-4 group"
                  >
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all group-hover:scale-110">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 
                      className="font-semibold text-xl"
                      style={{ color: '#E6E6E6', marginTop: '24px' }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="leading-relaxed"
                      style={{ color: '#C7C7C7', marginTop: '16px' }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Jornada Section */}
        <section 
          id="jornada" 
          className="relative border-t border-b"
          style={{
            paddingTop: '72px',
            paddingBottom: '72px',
            background: 'linear-gradient(180deg, #0C0C0C 0%, #0A0A0A 100%)',
            borderColor: '#1A1A1A'
          }}
        >
          {/* Glow cinematográfico atrás do título */}
          <div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(140, 82, 255, 0.10) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(50px)'
            }}
          />
          
          <div className="container relative z-10">
            <div 
              className="max-w-3xl mx-auto"
              data-animate="jornada"
              id="jornada"
              style={{
                opacity: visibleSections.has('jornada') ? 1 : 0,
                transform: visibleSections.has('jornada') ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              {/* Título */}
              <div className="text-center mb-6">
                <h2 
                  className="text-3xl md:text-5xl font-bold"
                  style={{ color: '#E6E6E6' }}
                >
                  Sua Jornada na Economia Digital
                </h2>
              </div>
              
              {/* Subtítulo */}
              <div className="text-center" style={{ marginTop: '24px' }}>
                <p 
                  className="text-xl"
                  style={{ color: '#9E9E9E' }}
                >
                  Do primeiro desafio à conquista do nível Elite
                </p>
              </div>

              {/* Texto principal (dois blocos) */}
              <div className="max-w-2xl mx-auto space-y-6 text-center" style={{ marginTop: '40px' }}>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: '#C7C7C7' }}
                >
                  Comece aceitando o <strong style={{ color: '#E6E6E6' }}>Desafio da Garrafa</strong> e torne-se Recruta. Escolha sua trilha — Creator ou Builder — e aprofunde-se em <strong style={{ color: '#E6E6E6' }}>stablecoins</strong>, <strong style={{ color: '#E6E6E6' }}>economia sob demanda</strong> e <strong style={{ color: '#E6E6E6' }}>criatividade digital</strong>.
                </p>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: '#C7C7C7' }}
                >
                  Complete missões, conquiste patentes e evolua até se tornar <strong style={{ color: '#E6E6E6' }}>Elite</strong>, com acesso às Operações de Elite, rede premium e novas oportunidades na economia digital.
                </p>
              </div>

              {/* Botão refinado */}
              <div className="text-center" style={{ marginTop: '48px' }}>
                <a 
                  href="#desafio" 
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(90deg, #6F3BFF, #8C52FF)',
                    boxShadow: '0 0 16px rgba(140, 82, 255, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 24px rgba(140, 82, 255, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(140, 82, 255, 0.4)';
                  }}
                >
                  Começar Agora
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section 
          id="faq" 
          className="relative"
          style={{ 
            paddingTop: '72px',
            paddingBottom: '72px'
          }}
        >
          <div className="container">
            <div 
              className="max-w-3xl mx-auto space-y-12"
              data-animate="faq"
              id="faq"
              style={{
                opacity: visibleSections.has('faq') ? 1 : 0,
                transform: visibleSections.has('faq') ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              <div className="text-center space-y-6">
                <h2 
                  className="text-3xl md:text-5xl font-bold"
                  style={{ color: '#E6E6E6' }}
                >
                  Perguntas Frequentes
                </h2>
                <p 
                  className="text-xl"
                  style={{ color: '#A1A1A1', marginTop: '24px' }}
                >
                  Tudo o que você precisa saber
                </p>
              </div>

              <div style={{ marginTop: '48px' }}>
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
                    q: "Posso participar das duas trilhas (Creator e Builder)?",
                    a: "Sim! Você pode escolher uma trilha principal, mas terá acesso ao conteúdo de ambas. A Trilha Creator foca em economia criativa e gig economy, enquanto a Trilha Builder foca em construção de produtos na economia digital."
                  },
                  {
                    q: "O que são Operações de Elite?",
                    a: "São oportunidades exclusivas na economia digital: projetos reais com stablecoins, deals de investimento, parcerias estratégicas e acesso a network premium. Disponível apenas para membros que alcançaram as patentes mais altas."
                  }
                ]} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final Section - Newsletter Focada no Usuário */}
        <section 
          className="relative overflow-hidden"
          style={{ 
            paddingTop: '120px',
            paddingBottom: '120px',
            background: '#000'
          }}
        >
          <div className="container relative">
            <div 
              className="max-w-4xl mx-auto"
              data-animate="cta"
              id="cta"
              style={{
                opacity: visibleSections.has('cta') ? 1 : 0,
                transform: visibleSections.has('cta') ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              {/* Box com borda neon */}
              <div 
                className="relative p-12 md:p-16 text-center"
                style={{
                  background: 'rgba(10, 10, 11, 0.8)',
                  borderRadius: '16px',
                  border: '2px solid transparent',
                  backgroundImage: 'linear-gradient(rgba(10, 10, 11, 0.8), rgba(10, 10, 11, 0.8)), linear-gradient(135deg, #6F3BFF, #00D9FF, #8C52FF)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                  boxShadow: '0 0 40px rgba(111, 59, 255, 0.3), inset 0 0 60px rgba(111, 59, 255, 0.05)'
                }}
              >
                <h2 
                  className="text-4xl md:text-6xl font-bold mb-6"
                  style={{ 
                    color: '#FFFFFF',
                    lineHeight: '1.1'
                  }}
                >
                  Pronto para Dominar a<br />Economia Digital?
                </h2>
                <p 
                  className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
                  style={{ color: '#A1A1A1' }}
                >
                  Junte-se à elite dos creators e builders. Comece sua jornada agora.
                </p>
                
                {/* Newsletter form */}
                <div className="max-w-md mx-auto space-y-4">
                  <p className="text-sm" style={{ color: '#9E9E9E' }}>
                    Receba conteúdo exclusivo sobre stablecoins, DeFi e economia digital
                  </p>
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer 
        className="border-t py-16 relative"
        style={{
          borderColor: '#1A1A1A',
          background: 'rgba(7, 7, 7, 0.5)'
        }}
      >
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src={APP_LOGO} 
                  alt={APP_TITLE} 
                  className="h-6 w-6" 
                  style={{
                    animation: 'logoGlow 3s ease-in-out infinite',
                    filter: 'drop-shadow(0 0 4px rgba(140, 82, 255, 0.3))'
                  }}
                />
                <span className="font-bold" style={{ color: '#E6E6E6' }}>{APP_TITLE}</span>
              </div>
              <p className="text-sm" style={{ color: '#C7C7C7' }}>
                Comunidade de elite para a economia digital
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold" style={{ color: '#9E9E9E' }}>Comunidade</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a 
                    href="/desafio" 
                    className="transition-colors"
                    style={{ color: '#C7C7C7' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8C52FF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C7C7C7'}
                  >
                    Desafio da Garrafa
                  </a>
                </li>
                <li>
                  <a 
                    href="/academia" 
                    className="transition-colors"
                    style={{ color: '#C7C7C7' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8C52FF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C7C7C7'}
                  >
                    Academia EdTech
                  </a>
                </li>
                <li>
                  <a 
                    href="/jornada" 
                    className="transition-colors"
                    style={{ color: '#C7C7C7' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8C52FF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C7C7C7'}
                  >
                    Jornada
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold" style={{ color: '#9E9E9E' }}>Recursos</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a 
                    href="https://www.base-xyz.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="transition-colors"
                    style={{ color: '#C7C7C7' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8C52FF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C7C7C7'}
                  >
                    Entrar na Comunidade
                  </a>
                </li>
                <li>
                  <a 
                    href="/faq" 
                    className="transition-colors"
                    style={{ color: '#C7C7C7' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8C52FF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C7C7C7'}
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a 
                    href="/cadastro" 
                    className="transition-colors"
                    style={{ color: '#C7C7C7' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8C52FF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C7C7C7'}
                  >
                    Participar
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold" style={{ color: '#9E9E9E' }}>Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a 
                    href="#" 
                    className="transition-colors"
                    style={{ color: '#C7C7C7' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8C52FF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C7C7C7'}
                  >
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="transition-colors"
                    style={{ color: '#C7C7C7' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8C52FF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C7C7C7'}
                  >
                    Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div 
            className="pt-8 border-t text-center text-sm"
            style={{ 
              borderColor: '#1A1A1A',
              color: '#9E9E9E'
            }}
          >
            <p className="mb-2">© 2025 Base XYZ. Todos os direitos reservados.</p>
            <p className="text-xs">
              Made with{' '}
              <a 
                href="https://manus.im" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Manus
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
