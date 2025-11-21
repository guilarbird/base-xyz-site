import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQ() {
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

      <main className="flex-1 py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#E6E6E6' }}>
              Perguntas Frequentes
            </h1>
            <p className="text-xl" style={{ color: '#A1A1A1' }}>
              Tudo o que você precisa saber sobre a Base XYZ
            </p>
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
              q: "Posso participar das duas trilhas (Creator e Builder)?",
              a: "Sim! Você pode escolher uma trilha principal, mas terá acesso ao conteúdo de ambas. A Trilha Creator foca em economia criativa e gig economy, enquanto a Trilha Builder foca em construção de produtos na economia digital."
            },
            {
              q: "O que são Operações de Elite?",
              a: "São oportunidades exclusivas na economia digital: projetos reais com stablecoins, deals de investimento, parcerias estratégicas e acesso a network premium. Disponível apenas para membros que alcançaram as patentes mais altas."
            },
            {
              q: "Vocês trazem investidores?",
              a: "Não. Conectamos creators e builders a projetos globais e organizamos experiências exclusivas para a comunidade. Nosso foco é em educação, networking e oportunidades práticas."
            },
            {
              q: "Como funciona a comunidade?",
              a: "A Base XYZ é uma comunidade privada no Circle.so onde membros interagem, compartilham conhecimento, participam de eventos exclusivos e têm acesso a conteúdo premium sobre economia digital."
            },
            {
              q: "Quanto tempo leva para ser aprovado?",
              a: "Após enviar seu Desafio da Garrafa, a avaliação leva de 3 a 7 dias úteis. Você receberá feedback independente do resultado."
            }
          ]} />

          <div className="text-center mt-12">
            <p className="text-sm mb-4" style={{ color: '#A1A1A1' }}>
              Ainda tem dúvidas?
            </p>
            <Button variant="outline" asChild className="border-primary/50 hover:bg-primary/10">
              <a href="/cadastro">Fale com a Sentinela Base XYZ</a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
