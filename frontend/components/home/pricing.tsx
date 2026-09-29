import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    name: "Plano Essencial",
    monthlyPrice: "R$ 29,90/mês",
    features: [
      "10 pesquisas/mês",
      "Até 20 empresas por pesquisa",
      "Até 200 empresas encontradas por mês",
      "Dados como nome, telefone, site e endereço",
    ],
    isPopular: false,
  },
  {
    name: "Plano Completo",
    monthlyPrice: "R$ 89,90/mês",
    features: [
      "30 pesquisas/mês",
      "Até 20 empresas por pesquisa",
      "Até 600 empresas encontradas por mês",
      "Dados como nome, telefone, site e endereço",
    ],
    isPopular: true,
  },
];

export function Pricing() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <h2 className="text-pretty text-4xl font-bold lg:text-6xl">Planos</h2>
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <p className="text-muted-foreground max-w-3xl lg:text-xl">
              Escolha o plano para sua rotina de prospecção.
            </p>
          </div>
          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex w-full flex-col rounded-lg border p-6 text-left ${
                  plan.isPopular ? "border-primary" : ""
                }`}
              >
                <Badge className="mb-8 block w-fit uppercase">{plan.name}</Badge>
                <span className="text-4xl font-medium">{plan.monthlyPrice}</span>
                <Separator className="my-6" />
                <div className="flex h-full flex-col justify-between gap-20">
                  <ul className="text-muted-foreground space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="size-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Escolher plano</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
