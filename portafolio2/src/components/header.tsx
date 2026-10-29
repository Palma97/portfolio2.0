import Image from "next/image";
import icon from "@/images/Icon.jpg";

export type Language = "en" | "es";
export type Theme = "light" | "dark";

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
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
};

export default function Header({
  language,
  onLanguageChange,
  theme,
  onThemeChange,
}: HeaderProps) {
  const isEnglish = language === "en";
  const isDark = theme === "dark";

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand-group">
          <a className="brand" href="#inicio" aria-label="Nicolás Palma, home">
            <Image
              className="brand-logo"
              src={icon}
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
          <div
            className="theme-switch"
            role="group"
            aria-label={isEnglish ? "Choose color theme" : "Elegir tema de color"}
          >
            <button
              aria-label={isEnglish ? "Switch to light mode" : "Cambiar a modo claro"}
              aria-pressed={!isDark}
              className={!isDark ? "theme-active" : undefined}
              onClick={() => onThemeChange("light")}
              type="button"
            >
              <svg
                aria-hidden="true"
                fill="none"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            </button>
            <button
              aria-label={isEnglish ? "Switch to dark mode" : "Cambiar a modo oscuro"}
              aria-pressed={isDark}
              className={isDark ? "theme-active" : undefined}
              onClick={() => onThemeChange("dark")}
              type="button"
            >
              <svg
                aria-hidden="true"
                fill="none"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
                <path d="m16.5 3 .45 1.35L18.3 4.8l-1.35.45-.45 1.35-.45-1.35-1.35-.45 1.35-.45L16.5 3Z" />
              </svg>
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
