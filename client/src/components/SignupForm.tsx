import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Por favor, insira um email válido");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio (você pode integrar com Circle API ou enviar email)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aqui você pode adicionar integração real:
      // - Enviar para Circle API para criar convite
      // - Enviar para seu backend para processar
      // - Enviar email com instruções
      
      setIsSuccess(true);
      toast.success("Cadastro realizado! Verifique seu email.");
      
      // Reset form
      setName("");
      setEmail("");
    } catch (error) {
      toast.error("Erro ao processar cadastro. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="bg-card border-primary/20">
        <CardContent className="pt-6 text-center space-y-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-xl">Cadastro Realizado!</h3>
            <p className="text-muted-foreground">
              Enviamos um email com instruções para acessar a comunidade e começar o Desafio da Garrafa.
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setIsSuccess(false)}
            className="mt-4"
          >
            Fazer Outro Cadastro
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-border/50">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                Aceitar o Desafio
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Ao se cadastrar, você concorda com nossos Termos de Uso e Política de Privacidade.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
