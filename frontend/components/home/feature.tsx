import {
  Building2,
  Handshake,
  BriefcaseBusiness,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    heading: "Agências",
    description: "Encontre empresas para oferecer seus serviços.",
    icon: <Building2 className="size-6" />,
  },
  {
    heading: "Vendedores",
    description: "Encontre novos negócios para entrar em contato.",
    icon: <Handshake className="size-6" />,
  },
  {
    heading: "Empresas B2B",
    description: "Encontre potenciais clientes para sua equipe comercial.",
    icon: <BriefcaseBusiness className="size-6" />,
  },
  {
    heading: "Freelancers",
    description: "Encontre empresas que podem precisar do seu serviço.",
    icon: <UserRound className="size-6" />,
  },
];

export default function Feature() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-pretty text-4xl font-medium lg:text-5xl">
            Feito para quem precisa encontrar empresas para prospectar.
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.heading} className="flex flex-col">
              <div className="bg-accent mb-5 flex size-16 items-center justify-center rounded-full">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.heading}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Button size="lg" asChild>
            <Link href="/login">Começar agora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
