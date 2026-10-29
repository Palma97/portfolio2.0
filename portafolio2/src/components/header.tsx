import Image from "next/image";

export type Language = "en" | "es";

const links: Record<Language, { href: string; label: string }[]> = {
  en: [
    { href: "#inicio", label: "Home" },
    { href: "#perfil", label: "Profile" },
    { href: "#experiencia", label: "Experience" },
    { href: "#proyectos", label: "Projects" },
    { href: "#estudios", label: "Education" },
    { href: "#contacto", label: "Contact" },
  ],
  es: [
    { href: "#inicio", label: "Inicio" },
    { href: "#perfil", label: "Perfil" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#estudios", label: "Estudios" },
    { href: "#contacto", label: "Contáctame" },
  ],
};

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export default function Header({
  language,
  onLanguageChange,
}: HeaderProps) {
  const isEnglish = language === "en";

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand-group">
          <a className="brand" href="#inicio" aria-label="Nicolás Palma, home">
            <Image
              className="brand-logo"
              src="/portfolio2.0/logoCode.jpg"
              alt=""
              width={42}
              height={42}
              priority
            />
            <span>
              Nicolás Palma
              <small>{isEnglish ? "Frontend developer" : "Desarrollador frontend"}</small>
            </span>
          </a>
          <div
            className="language-switch"
            role="group"
            aria-label={isEnglish ? "Choose language" : "Elegir idioma"}
          >
            <button
              aria-pressed={isEnglish}
              className={isEnglish ? "language-active" : undefined}
              onClick={() => onLanguageChange("en")}
              type="button"
            >
              EN
            </button>
            <span aria-hidden="true">/</span>
            <button
              aria-pressed={!isEnglish}
              className={!isEnglish ? "language-active" : undefined}
              onClick={() => onLanguageChange("es")}
              type="button"
            >
              ES
            </button>
          </div>
        </div>
        <nav
          className="site-nav"
          aria-label={isEnglish ? "Main navigation" : "Navegación principal"}
        >
          {links[language].map((link) => (
            <a
              className={
                link.href === "#contacto" ? "nav-contact" : undefined
              }
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
