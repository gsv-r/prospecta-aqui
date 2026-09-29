import { Search, MapPin, Database, Send } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Escolha o que você procura",
      description:
        "Defina o segmento da empresa que deseja encontrar.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Encontre empresas por cidade",
      description:
        "Informe a cidade onde estão seus potenciais clientes.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Tenha os dados em um só lugar",
      description:
        "Veja informações como nome, telefone, site e endereço.",
    },
    {
      icon: <Send className="h-6 w-6" />,
      title: "Comece sua prospecção",
      description:
        "Encontre empresas e entre em contato com os potenciais clientes.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Encontre empresas sem perder tempo pesquisando.
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              O Prospecta Aqui simplifica a busca por novos negócios e deixa os dados organizados para você começar o contato.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
