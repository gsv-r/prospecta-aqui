import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const heroImage = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg";

const Hero = () => {
  return (
    <section className="min-h-[calc(100dvh-72px)] flex items-center py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              ⚡ Prospecção simples, rápida e direta
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>

            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Encontre empresas para prospectar em segundos.
            </h1>

            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Escolha um segmento e uma cidade. O Prospecta Aqui encontra empresas e reúne os dados necessários para você começar a prospecção.
            </p>

            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <Link href="https://wa.me/5517981836638?text=Olá! Vi o site e quero saber mais sobre os serviços de estética automotiva.">
                  Começar agora
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="#processo">
                  Saiba mais
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <Image
            src={heroImage}
            alt="Estética automotiva profissional"
            width={1200}
            height={800}
            className="max-h-96 w-full rounded-md object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;