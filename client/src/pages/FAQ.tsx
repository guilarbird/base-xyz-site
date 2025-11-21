import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqCategories = [
    {
      category: "Sobre a Base XYZ",
      questions: [
        {
          q: "O que é a Base XYZ?",
          a: "A Base XYZ é uma comunidade de elite para creators e builders que estão moldando o futuro da economia digital. Oferecemos educação sobre stablecoins, DeFi, gig economy, edtech e economia criativa, além de networking e oportunidades exclusivas."
        },
        {
          q: "Vocês trazem investidores?",
          a: "Não. Conectamos creators e builders a projetos globais e organizamos experiências exclusivas para a comunidade. Nosso foco é em educação, networking e oportunidades práticas na economia digital."
        },
        {
          q: "Quanto custa para participar?",
          a: "A participação na Base XYZ é gratuita. Nosso foco é em qualidade, não em quantidade. Você só precisa completar o Desafio da Garrafa para entrar."
        },
        {
          q: "Como funciona a comunidade?",
          a: "A Base XYZ é uma comunidade privada no Circle.so onde membros interagem, compartilham conhecimento, participam de eventos exclusivos e têm acesso a conteúdo premium sobre economia digital."
        }
      ]
    },
    {
      category: "Desafio da Garrafa",
      questions: [
        {
          q: "O que é o Desafio da Garrafa?",
          a: "É um ritual de entrada criativo onde você cria um vídeo de até 60 segundos explicando um tema da economia digital (stablecoins, DeFi, gig economy, etc). É nossa forma de identificar pessoas com pensamento crítico e capacidade de comunicação."
        },
        {
          q: "Quanto tempo leva para ser aprovado?",
          a: "Após enviar seu Desafio da Garrafa, a avaliação leva de 3 a 7 dias úteis. Você receberá feedback independente do resultado."
        },
        {
          q: "Quais são os critérios de avaliação?",
          a: "Avaliamos clareza na explicação, criatividade na abordagem, capacidade de simplificar conceitos complexos, qualidade de produção (não precisa ser profissional, mas caprichado) e autenticidade."
        },
        {
          q: "Posso refazer o desafio se for reprovado?",
          a: "Sim! Você pode refazer o desafio após 30 dias, aplicando o feedback que recebeu na primeira tentativa."
        }
      ]
    },
    {
      category: "Trilhas e Conteúdo",
      questions: [
        {
          q: "O que vou aprender sobre economia digital?",
          a: "Você terá acesso a conteúdo sobre stablecoins, DeFi, economia criativa, gig economy, edtech, pagamentos cross-border, Web3 e muito mais. Tudo com foco prático e aplicável."
        },
        {
          q: "Posso participar das duas trilhas (Creator e Builder)?",
          a: "Sim! Você pode escolher uma trilha principal, mas terá acesso ao conteúdo de ambas. A Trilha Creator foca em economia criativa e gig economy, enquanto a Trilha Builder foca em construção de produtos na economia digital."
        },
        {
          q: "Qual a diferença entre Trilha Creator e Builder?",
          a: "A Trilha Creator é para quem quer dominar economia criativa, criação de conteúdo, monetização e gig economy. A Trilha Builder é para quem quer construir produtos inovadores com stablecoins, DeFi e infraestrutura Web3."
        },
        {
          q: "O conteúdo é atualizado regularmente?",
          a: "Sim! Publicamos novos cursos, cases e análises semanalmente, sempre focando nas tendências mais recentes da economia digital."
        }
      ]
    },
    {
      category: "Comunidade e Benefícios",
      questions: [
        {
          q: "O que são Operações de Elite?",
          a: "São oportunidades exclusivas na economia digital: projetos reais com stablecoins, deals de investimento, parcerias estratégicas e acesso a network premium. Disponível apenas para membros que alcançaram as patentes mais altas."
        },
        {
          q: "Como funciona o sistema de patentes?",
          a: "Membros evoluem através de patentes baseadas em participação, contribuições e conquistas na comunidade. Quanto maior sua patente, mais acesso você tem a oportunidades exclusivas."
        },
        {
          q: "Posso fazer networking com outros membros?",
          a: "Sim! A comunidade é focada em networking de alta qualidade. Você terá acesso a eventos exclusivos, grupos de discussão e conexões diretas com outros creators e builders."
        },
        {
          q: "Existem eventos presenciais?",
          a: "Sim! Organizamos meetups, workshops e eventos exclusivos para membros em São Paulo e outras cidades brasileiras."
        }
      ]
    },
    {
      category: "Técnico e Processo",
      questions: [
        {
          q: "Preciso ter conhecimento prévio sobre Web3?",
          a: "Não! Aceitamos tanto iniciantes quanto especialistas. O importante é ter curiosidade, vontade de aprender e capacidade de comunicação."
        },
        {
          q: "Como faço para entrar na comunidade após ser aprovado?",
          a: "Após aprovação no Desafio da Garrafa, você receberá um convite por email com instruções de acesso à comunidade Circle.so."
        },
        {
          q: "Posso sair da comunidade a qualquer momento?",
          a: "Sim, você pode sair quando quiser. Mas recomendamos que aproveite ao máximo o conteúdo e networking antes de tomar essa decisão."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
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
        <div className="container max-w-3xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#E6E6E6' }}>
              Perguntas Frequentes
            </h1>
            <p className="text-xl" style={{ color: '#A1A1A1' }}>
              Tudo o que você precisa saber sobre a Base XYZ, o Desafio da Garrafa e como participar da comunidade
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 py-20">
        <div className="container max-w-4xl">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#E6E6E6' }}>
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${catIndex}-${index}`}
                    className="border-b border-border/20"
                  >
                    <AccordionTrigger 
                      className="text-left hover:no-underline py-4"
                      style={{ color: '#E6E6E6' }}
                    >
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent 
                      className="text-base leading-relaxed pb-4"
                      style={{ color: '#C7C7C7' }}
                    >
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="text-center mt-16 pt-8 border-t border-border/20">
            <p className="text-lg mb-6" style={{ color: '#A1A1A1' }}>
              Ainda tem dúvidas?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild
                style={{
                  background: 'linear-gradient(90deg, #6F3BFF, #8C52FF)',
                  boxShadow: '0 0 16px rgba(140, 82, 255, 0.4)'
                }}
              >
                <a href="/cadastro">Participar Agora</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary/50 hover:bg-primary/10">
                <a href="https://wa.me/5511999999999?text=Olá! Tenho dúvidas sobre a Base XYZ" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
