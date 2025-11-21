import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { APP_LOGO } from "@/const";
import { useState } from "react";
import { useLocation } from "wouter";
import { Palette, Wrench, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Cadastro() {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    trilhas: [] as string[],
    instagram: "",
    tiktok: "",
    x: "",
    kwai: "",
    interesses: [] as string[],
    outroInteresse: ""
  });

  const interessesOptions = [
    "Aprender sobre stablecoins",
    "Criar conteúdo sobre economia digital",
    "Construir produtos Web3",
    "Monetizar como creator",
    "Entender DeFi",
    "Trabalhar com gig economy",
    "Outro"
  ];

  const handleTrilhaToggle = (trilha: string) => {
    setFormData(prev => ({
      ...prev,
      trilhas: prev.trilhas.includes(trilha)
        ? prev.trilhas.filter(t => t !== trilha)
        : [...prev.trilhas, trilha]
    }));
  };

  const handleInteresseToggle = (interesse: string) => {
    setFormData(prev => ({
      ...prev,
      interesses: prev.interesses.includes(interesse)
        ? prev.interesses.filter(i => i !== interesse)
        : [...prev.interesses, interesse]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || formData.trilhas.length === 0) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }

    if (formData.interesses.length === 0) {
      toast.error("Selecione pelo menos um interesse");
      return;
    }

    if (formData.interesses.includes("Outro") && !formData.outroInteresse.trim()) {
      toast.error("Por favor, especifique seu outro interesse");
      return;
    }

    setLoading(true);

    try {
      // Preparar dados para Circle.so
      const interessesTexto = formData.interesses
        .filter(i => i !== "Outro")
        .concat(formData.outroInteresse ? [formData.outroInteresse] : [])
        .join(", ");

      const redesSociais = [
        formData.instagram && `Instagram: ${formData.instagram}`,
        formData.tiktok && `TikTok: ${formData.tiktok}`,
        formData.x && `X: ${formData.x}`,
        formData.kwai && `Kwai: ${formData.kwai}`
      ].filter(Boolean).join(" | ");

      const payload = {
        email: formData.email,
        name: formData.nome,
        skip_invitation: false,
        custom_fields: {
          trilhas: formData.trilhas.join(", "),
          redes_sociais: redesSociais || "Não informado",
          interesses: interessesTexto
        }
      };

      const response = await fetch(`${import.meta.env.VITE_CIRCLE_BASE_URL || 'https://app.circle.so/api/v1'}/community_members`, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${import.meta.env.VITE_CIRCLE_API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Erro ${response.status}: ${response.statusText}`);
      }

      // Salvar no localStorage para o onboarding
      localStorage.setItem('cadastro_base_xyz', JSON.stringify(formData));
      
      toast.success("Cadastro realizado com sucesso!");
      setTimeout(() => {
        setLocation('/onboarding');
      }, 1000);

    } catch (error: any) {
      console.error('Erro ao cadastrar:', error);
      toast.error(error.message || "Erro ao realizar cadastro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

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
        className="relative py-16 overflow-hidden"
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
        <div className="container max-w-2xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#E6E6E6' }}>
              Junte-se à Base XYZ
            </h1>
            <p className="text-lg" style={{ color: '#A1A1A1' }}>
              Preencha o formulário abaixo para começar sua jornada na economia digital
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit}>
            <Card className="bg-card border-border/50">
              <CardContent className="p-8 space-y-6">
                {/* Nome */}
                <div className="space-y-2">
                  <Label htmlFor="nome" style={{ color: '#E6E6E6' }}>Nome completo *</Label>
                  <Input
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                    placeholder="Seu nome completo"
                    className="bg-background border-border/50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" style={{ color: '#E6E6E6' }}>Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="seu@email.com"
                    className="bg-background border-border/50"
                  />
                </div>

                {/* Trilhas */}
                <div className="space-y-4">
                  <Label style={{ color: '#E6E6E6' }}>Trilhas de interesse * (selecione uma ou ambas)</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { id: 'Creator', icon: Palette, desc: 'Economia criativa e gig economy' },
                      { id: 'Builder', icon: Wrench, desc: 'Produtos Web3 e infraestrutura' }
                    ].map((trilha) => (
                      <div
                        key={trilha.id}
                        onClick={() => handleTrilhaToggle(trilha.id)}
                        className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                          formData.trilhas.includes(trilha.id)
                            ? 'border-primary bg-primary/10'
                            : 'border-border/50 hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                            formData.trilhas.includes(trilha.id) ? 'bg-primary/20' : 'bg-muted'
                          }`}>
                            <trilha.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1" style={{ color: '#E6E6E6' }}>
                              Trilha {trilha.id}
                            </h3>
                            <p className="text-sm" style={{ color: '#A1A1A1' }}>
                              {trilha.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="space-y-4">
                  <Label style={{ color: '#E6E6E6' }}>Redes sociais (opcional)</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Instagram (@usuario)"
                      value={formData.instagram}
                      onChange={(e) => setFormData(prev => ({ ...prev, instagram: e.target.value }))}
                      className="bg-background border-border/50"
                    />
                    <Input
                      placeholder="TikTok (@usuario)"
                      value={formData.tiktok}
                      onChange={(e) => setFormData(prev => ({ ...prev, tiktok: e.target.value }))}
                      className="bg-background border-border/50"
                    />
                    <Input
                      placeholder="X/Twitter (@usuario)"
                      value={formData.x}
                      onChange={(e) => setFormData(prev => ({ ...prev, x: e.target.value }))}
                      className="bg-background border-border/50"
                    />
                    <Input
                      placeholder="Kwai (@usuario)"
                      value={formData.kwai}
                      onChange={(e) => setFormData(prev => ({ ...prev, kwai: e.target.value }))}
                      className="bg-background border-border/50"
                    />
                  </div>
                </div>

                {/* Interesses */}
                <div className="space-y-4">
                  <Label style={{ color: '#E6E6E6' }}>O que você quer construir ou aprender? * (selecione uma ou mais opções)</Label>
                  <div className="space-y-3">
                    {interessesOptions.map((interesse) => (
                      <div key={interesse} className="flex items-start gap-3">
                        <Checkbox
                          id={interesse}
                          checked={formData.interesses.includes(interesse)}
                          onCheckedChange={() => handleInteresseToggle(interesse)}
                        />
                        <Label
                          htmlFor={interesse}
                          className="text-sm cursor-pointer"
                          style={{ color: '#C7C7C7' }}
                        >
                          {interesse}
                        </Label>
                      </div>
                    ))}
                  </div>
                  
                  {formData.interesses.includes("Outro") && (
                    <Textarea
                      placeholder="Conte-nos sobre seus objetivos, projetos ou o que te motiva na economia digital..."
                      value={formData.outroInteresse}
                      onChange={(e) => setFormData(prev => ({ ...prev, outroInteresse: e.target.value }))}
                      rows={4}
                      className="bg-background border-border/50 placeholder:text-muted-foreground"
                      style={{ color: '#E6E6E6' }}
                    />
                  )}
                  <p className="text-xs" style={{ color: '#666' }}>
                    💡 Dica: Seja específico! Isso nos ajuda a personalizar sua experiência na comunidade.
                  </p>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                  style={{
                    background: 'linear-gradient(90deg, #6F3BFF, #8C52FF)',
                    boxShadow: '0 0 16px rgba(140, 82, 255, 0.4)'
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Cadastrando...
                    </>
                  ) : (
                    'Continuar'
                  )}
                </Button>
              </CardContent>
            </Card>
          </form>
        </div>
      </main>
    </div>
  );
}
