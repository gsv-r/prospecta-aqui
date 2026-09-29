import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como funciona o Prospecta Aqui?",
    answer:
      "Você escolhe um segmento e uma cidade. O sistema encontra empresas e mostra os dados disponíveis para você começar sua prospecção.",
  },
  {
    question: "Quais dados das empresas são encontrados?",
    answer:
      "A plataforma mostra informações como nome, telefone, site e endereço das empresas encontradas.",
  },
  {
    question: "Posso pesquisar qualquer segmento?",
    answer:
      "Sim. Você informa o segmento de empresa que deseja encontrar e realiza a pesquisa de acordo com o seu objetivo de prospecção.",
  },
  {
    question: "Posso pesquisar por cidade?",
    answer:
      "Sim. Você define a cidade onde estão seus potenciais clientes e o sistema realiza a busca nessa região.",
  },
  {
    question: "O Prospecta Aqui faz a prospecção por mim?",
    answer:
      "Não. A plataforma encontra as empresas e organiza os dados. O contato e a prospecção são feitos por você.",
  },
];

export default function Faq() {
  return (
    <section className="py-16 flex justify-center">
      <div className="container max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          Perguntas Frequentes
        </h1>
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
