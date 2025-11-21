import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { useLocation } from "wouter";

export default function Cadastro() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    trilhas: [] as string[],
    redesSociais: {
      x: "",
      tiktok: "",
      kwai: "",
      instagram: ""
    },
    motivacao: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTrilhaToggle = (trilha: string) => {
    setFormData(prev => ({
      ...prev,
      trilhas: prev.trilhas.includes(trilha)
        ? prev.trilhas.filter(t => t !== trilha)
        : [...prev.trilhas, trilha]
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email) {
      toast.error("Por favor, preencha nome e email");
      return;
    }

    if (formData.trilhas.length === 0) {
      toast.error("Selecione pelo menos uma trilha de interesse");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio (integração futura com backend)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Armazenar dados no localStorage para o agente de onboarding
      localStorage.setItem('cadastro_base_xyz', JSON.stringify(formData));
      
      toast.success("Cadastro realizado com sucesso!");
      
      // Redirecionar para página de onboarding
      setTimeout(() => {
        setLocation('/onboarding');
      }, 500);
    } catch (error) {
      toast.error("Erro ao processar cadastro. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="container max-w-3xl">
          <Card className="bg-card border-border/50">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-3xl md:text-4xl font-bold" style={{ color: '#E6E6E6' }}>
                Junte-se à Base XYZ
              </CardTitle>
              <CardDescription className="text-lg" style={{ color: '#A1A1A1' }}>
                Preencha o formulário abaixo para começar sua jornada na economia digital
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div className="space-y-2">
                  <label htmlFor="nome" className="text-sm font-medium" style={{ color: '#E6E6E6' }}>
                    Nome completo *
                  </label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium" style={{ color: '#E6E6E6' }}>
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* Trilhas */}
                <div className="space-y-3">
                  <label className="text-sm font-medium" style={{ color: '#E6E6E6' }}>
                    Trilhas de interesse * (selecione uma ou ambas)
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card 
                      className={`cursor-pointer transition-all ${
                        formData.trilhas.includes('Creator') 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border/50 hover:border-primary/50'
                      }`}
                      onClick={() => handleTrilhaToggle('Creator')}
                    >
                      <CardContent className="pt-6 pb-4">
                        <h3 className="font-semibold mb-2" style={{ color: '#E6E6E6' }}>
                          Trilha Creator
                        </h3>
                        <p className="text-sm" style={{ color: '#C7C7C7' }}>
                          Economia criativa, conteúdo, UGC, social media
                        </p>
                      </CardContent>
                    </Card>

                    <Card 
                      className={`cursor-pointer transition-all ${
                        formData.trilhas.includes('Builder') 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border/50 hover:border-primary/50'
                      }`}
                      onClick={() => handleTrilhaToggle('Builder')}
                    >
                      <CardContent className="pt-6 pb-4">
                        <h3 className="font-semibold mb-2" style={{ color: '#E6E6E6' }}>
                          Trilha Builder
                        </h3>
                        <p className="text-sm" style={{ color: '#C7C7C7' }}>
                          Produtos, Web3, automações, infraestrutura digital
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="space-y-3">
                  <label className="text-sm font-medium" style={{ color: '#E6E6E6' }}>
                    Redes sociais (opcional)
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="@seu_usuario (X/Twitter)"
                      value={formData.redesSociais.x}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        redesSociais: { ...formData.redesSociais, x: e.target.value }
                      })}
                    />
                    <Input
                      placeholder="@seu_usuario (TikTok)"
                      value={formData.redesSociais.tiktok}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        redesSociais: { ...formData.redesSociais, tiktok: e.target.value }
                      })}
                    />
                    <Input
                      placeholder="@seu_usuario (Kwai)"
                      value={formData.redesSociais.kwai}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        redesSociais: { ...formData.redesSociais, kwai: e.target.value }
                      })}
                    />
                    <Input
                      placeholder="@seu_usuario (Instagram)"
                      value={formData.redesSociais.instagram}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        redesSociais: { ...formData.redesSociais, instagram: e.target.value }
                      })}
                    />
                  </div>
                </div>

                {/* Motivação */}
                <div className="space-y-2">
                  <label htmlFor="motivacao" className="text-sm font-medium" style={{ color: '#E6E6E6' }}>
                    O que você quer construir ou aprender na economia digital?
                  </label>
                  <textarea
                    id="motivacao"
                    rows={4}
                    placeholder="Conte-nos sobre seus objetivos, projetos ou o que te motiva..."
                    value={formData.motivacao}
                    onChange={(e) => setFormData({ ...formData, motivacao: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                  style={{
                    background: 'linear-gradient(90deg, #6F3BFF, #8C52FF)',
                    boxShadow: '0 0 16px rgba(140, 82, 255, 0.4)'
                  }}
                >
                  {isSubmitting ? 'Processando...' : 'Continuar'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
