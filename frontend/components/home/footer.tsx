import { LogoText } from "@/components/logo";

const productLinks = [
  { text: "Para quem é", url: "#para-quem-e" },
  { text: "Como Funciona", url: "#como-funciona" },
  { text: "Planos", url: "#planos" },
  { text: "FAQ", url: "#faq" },
];

const socialLinks = [
  { text: "Instagram", url: "/" },
  { text: "Tiktok", url: "/" },
];

const bottomLinks = [
  { text: "Termos de Uso", url: "/" },
  { text: "Política de Privacidade", url: "/" },
];

export default function Footer() {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <LogoText className="text-xl">Prospecta Aqui</LogoText>
              </div>
              <p className="mt-4 font-bold">
                Encontre empresas. Prospecte melhor.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Produto</h3>
              <ul className="text-muted-foreground space-y-4">
                {productLinks.map((link) => (
                  <li key={link.text} className="hover:text-primary font-medium">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Social</h3>
              <ul className="text-muted-foreground space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.text} className="hover:text-primary font-medium">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <p>&copy; 2026 Prospecta Aqui. Todos os direitos reservados.</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link) => (
                <li key={link.text} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
