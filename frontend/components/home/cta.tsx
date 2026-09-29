import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="bg-foreground/5 border border-border flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Encontre empresas. Comece a prospectar.
            </h3>
            <p className="text-muted-foreground max-w-xl lg:text-lg">
              Tenha uma ferramenta simples para encontrar novos negócios sem perder tempo com pesquisas manuais.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button asChild variant="default" size="lg">
              <a href="/signup">Criar minha conta</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
