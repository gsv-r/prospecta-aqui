import { Asterisk } from "lucide-react";
import React from "react";

const Process = () => {
  const process = [
    {
      step: "01",
      title: "Escolha o segmento",
      description:
        "Informe o tipo de empresa que você procura.",
    },
    {
      step: "02",
      title: "Escolha a localidade",
      description:
        "Defina onde estão seus potenciais clientes.",
    },
    {
      step: "03",
      title: "Encontre empresas",
      description:
        "Receba uma lista de empresas para prospectar.",
    },
    {
      step: "04",
      title: "Tenha os dados em mãos",
      description:
        "Tenha acesso a informações como nome, telefone, site e endereço.",
    },
    {
      step: "05",
      title: "Comece a Prospectar",
      description:
        "Use os dados encontrados para começar seus contatos.",
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <div className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl">
              {" "}
              <h1 className="w-fit">Como Funciona</h1>
              <Asterisk className="absolute -right-2 -top-2 size-5 text-[#597928] md:size-10 lg:-right-14" />
            </div>
            <p className="text-foreground/50 text-base">
              Encontre empresas em poucos passos.
            </p>
          </div>
          <ul className="lg:pl-22 relative col-span-4 w-full">
            {process.map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-right gap-10 border-t py-8 md:flex-row lg:py-10"
              >
                <Illustration className="absolute right-0 top-4" />

                <div className="bg-muted flex size-12 items-center justify-center px-4 py-1 tracking-tighter">
                  0{index + 1}
                </div>
                <div className="">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-foreground/50">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#597928"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#597928"
        strokeWidth="4"
      />
    </svg>
  );
};
