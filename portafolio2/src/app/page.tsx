"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header, { type Language } from "@/components/header";
import portrait from "@/images/Me.png";

const translations = {
  en: {
    role: "Frontend developer",
    byline: "By Nicolás Palma",
    portfolio: "My portfolio",
    intro:
      "I create modern, functional digital experiences designed with people in mind.",
    profileLink: "Get to know me",
    portraitCaption: "Frontend developer · Colombia",
    scrollCue: "Scroll to get to know me",
    profileNumber: "01 / Profile",
    profileTitle: "Hello, I'm Nicolás.",
    profileLead:
      "I'm Jhoán Nicolás Palma, a frontend developer with experience building web and mobile interfaces.",
    profileCopy:
      "I'm passionate about building modern, clear, and easy-to-use digital products. My previous experience in the electrical sector also strengthened my sense of responsibility, commitment, and teamwork. I enjoy learning and taking on new challenges.",
    specialty: "Specialty",
    frontend: "Frontend development",
    experience: "Experience",
    platforms: "Web & mobile apps",
    language: "Language",
    englishLevel: "Spanish · English B1",
    softSkillsLabel: "Soft skills",
    softSkills: [
      "Clear communication",
      "Teamwork",
      "Problem-solving",
      "Critical thinking",
      "Organization & commitment",
    ],
    experienceNumber: "02 / Career",
    experienceTitle: "Experience",
    experiences: [
      {
        role: "Frontend developer",
        period: "Jul 2024 — Jul 2025",
        description:
          "Built interfaces for multiple MVPs across different business contexts using React, React Native, and TypeScript. Managed global state with Zustand and integrated backend services through APIs.",
      },
      {
        role: "Frontend web developer",
        period: "Nov 2023 — Jan 2024",
        description:
          "Collaborated on the design and development of a corporate portfolio, creating an appealing interface and a functional structure.",
      },
      {
        role: "Full stack web developer",
        period: "Sep 2023",
        description:
          "Contributed to a team project building an online music store, working on frontend and backend development, interface design, and feature integration.",
      },
    ],
    projectsNumber: "03 / Selected work",
    projectsTitle: "Projects",
    projects: [
      {
        title: "Music store",
        type: "Full stack development · Strings and Keys",
        description:
          "A collaborative project built by a team of eight. I contributed to frontend and backend development, interface design, and feature integration.",
        technologies: ["Frontend", "Backend", "Teamwork"],
        link: "Visit project",
      },
      {
        title: "Corporate portfolio",
        type: "Frontend development · Axes Dev",
        description:
          "Collaborated on the design and development of a company portfolio with an engaging interface and a functional structure.",
        technologies: ["Interface design", "Frontend"],
        link: "Visit project",
      },
      {
        title: "Business MVPs",
        type: "Frontend development · Dazlabs",
        description:
          "Contributed to multiple MVPs for different businesses, building interfaces with React, React Native, TypeScript, Zustand, and API integrations.",
        technologies: ["React", "React Native", "TypeScript", "Zustand", "APIs"],
        link: "",
      },
    ],
    educationNumber: "04 / Education",
    educationTitle: "Education",
    education: [
      { title: "Full stack web development", institution: "Soy Henry" },
      {
        title: "Administrative assistance technician",
        institution: "SENA",
      },
      { title: "Electrical technician", institution: "CONTE" },
      { title: "Technical high school diploma", institution: "José María Córdoba" },
      { title: "English B1", institution: "UNAD" },
    ],
    contactNumber: "05 / Say hello",
    contactTitle: "Have an idea?",
    contactIntro:
      "I'd love to talk about projects, opportunities, and new collaborations.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    signoff: "Thanks for stopping by.",
  },
  es: {
    role: "Desarrollador frontend",
    byline: "By Nicolás Palma",
    portfolio: "Mi portafolio",
    intro:
      "Creo experiencias digitales modernas, funcionales y pensadas para las personas.",
    profileLink: "Conoce mi perfil",
    portraitCaption: "Desarrollador frontend · Colombia",
    scrollCue: "Desliza para conocerme",
    profileNumber: "01 / Perfil",
    profileTitle: "Hola, soy Nicolás.",
    profileLead:
      "Soy Jhoán Nicolás Palma, desarrollador frontend con experiencia creando interfaces web y móviles.",
    profileCopy:
      "Me interesa construir productos digitales modernos, claros y fáciles de usar. Mi experiencia en el sector eléctrico también fortaleció mi responsabilidad, compromiso y capacidad para trabajar en equipo. Disfruto aprender y asumir nuevos retos.",
    specialty: "Especialidad",
    frontend: "Desarrollo frontend",
    experience: "Experiencia",
    platforms: "Web y aplicaciones móviles",
    language: "Idioma",
    englishLevel: "Español · Inglés B1",
    softSkillsLabel: "Habilidades personales",
    softSkills: [
      "Comunicación asertiva",
      "Trabajo en equipo",
      "Resolución de problemas",
      "Pensamiento crítico",
      "Organización y compromiso",
    ],
    experienceNumber: "02 / Trayectoria",
    experienceTitle: "Experiencia",
    experiences: [
      {
        role: "Desarrollador frontend",
        period: "Jul 2024 — Jul 2025",
        description:
          "Desarrollé interfaces para distintos MVPs y contextos de negocio con React, React Native y TypeScript. También gestioné estado global con Zustand e integré servicios mediante APIs.",
      },
      {
        role: "Desarrollador web frontend",
        period: "Nov 2023 — Ene 2024",
        description:
          "Colaboré en el diseño y desarrollo de un portafolio corporativo, creando interfaces agradables y una estructura funcional.",
      },
      {
        role: "Desarrollador web full stack",
        period: "Sep 2023",
        description:
          "Participé en equipo en el desarrollo de una tienda de música, aportando al frontend, backend, diseño de interfaces e integración de funcionalidades.",
      },
    ],
    projectsNumber: "03 / Trabajo destacado",
    projectsTitle: "Proyectos",
    projects: [
      {
        title: "Tienda de música",
        type: "Desarrollo full stack · Strings and Keys",
        description:
          "Proyecto colaborativo desarrollado por un equipo de ocho personas. Aporté al frontend y backend, al diseño de interfaces y a la integración de funcionalidades.",
        technologies: ["Frontend", "Backend", "Trabajo en equipo"],
        link: "Visitar proyecto",
      },
      {
        title: "Portafolio corporativo",
        type: "Desarrollo frontend · Axes Dev",
        description:
          "Colaboré en el diseño y desarrollo de un portafolio para una compañía, con una interfaz agradable y una estructura funcional.",
        technologies: ["Diseño de interfaces", "Frontend"],
        link: "Visitar proyecto",
      },
      {
        title: "MVPs para distintos negocios",
        type: "Desarrollo frontend · Dazlabs",
        description:
          "Durante un año participé en la creación de múltiples MVPs, desarrollando interfaces con React y React Native, TypeScript, Zustand e integración de APIs.",
        technologies: ["React", "React Native", "TypeScript", "Zustand", "APIs"],
        link: "",
      },
    ],
    educationNumber: "04 / Formación",
    educationTitle: "Estudios",
    education: [
      { title: "Desarrollo web full stack", institution: "Soy Henry" },
      { title: "Técnico en asistencia administrativa", institution: "SENA" },
      { title: "Técnico electricista", institution: "CONTE" },
      { title: "Bachiller técnico", institution: "José María Córdoba" },
      { title: "Inglés B1", institution: "UNAD" },
    ],
    contactNumber: "05 / Hablemos",
    contactTitle: "¿Tienes una idea?",
    contactIntro:
      "Estoy abierto a conversar sobre proyectos, oportunidades y nuevas colaboraciones.",
    email: "Correo",
    github: "GitHub",
    linkedin: "LinkedIn",
    signoff: "Gracias por pasar por aquí.",
  },
};

const experienceCompanies = [
  { company: "Dazlabs" },
  { company: "Axes Dev", url: "https://axesdev.com" },
  {
    company: "Strings and Keys",
    url: "https://stringsandkeys.up.railway.app",
  },
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const content = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="portfolio-page" id="inicio">
      <Header
        language={language}
        onLanguageChange={setLanguage}
      />

      <main className="portfolio-main">
        <section className="full-section home-hero" aria-labelledby="home-title">
          <div className="hero-copy">
            <p className="hero-kicker">
              <span className="hero-dot" />
              {content.role}
            </p>
            <p className="hero-note">{content.byline}</p>
            <h1 className="hero-title" id="home-title">
              {content.portfolio}
            </h1>
            <p className="hero-intro">{content.intro}</p>
            <a className="text-link" href="#perfil">
              {content.profileLink} <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <Image
                className="portrait-image"
                src={portrait}
                alt={language === "en" ? "Portrait of Nicolás Palma" : "Retrato de Nicolás Palma"}
                priority
                sizes="(max-width: 760px) 72vw, 38vw"
              />
            </div>
            <p className="portrait-caption">{content.portraitCaption}</p>
            <span className="portrait-spark" aria-hidden="true">
              ✳
            </span>
          </div>
          <a className="scroll-cue" href="#perfil">
            {content.scrollCue} <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section
          className="full-section content-section profile-section"
          id="perfil"
          aria-labelledby="profile-title"
        >
          <div className="section-heading">
            <p className="section-number">{content.profileNumber}</p>
            <h2 id="profile-title">{content.profileTitle}</h2>
          </div>
          <div className="profile-content">
            <p className="profile-lead">{content.profileLead}</p>
            <p className="section-copy">{content.profileCopy}</p>
            <div className="profile-details">
              <div>
                <span>{content.specialty}</span>
                <strong>{content.frontend}</strong>
              </div>
              <div>
                <span>{content.experience}</span>
                <strong>{content.platforms}</strong>
              </div>
              <div>
                <span>{content.language}</span>
                <strong>{content.englishLevel}</strong>
              </div>
            </div>
            <div className="skill-list" aria-label={content.softSkillsLabel}>
              {content.softSkills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          className="full-section content-section experience-section"
          id="experiencia"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <p className="section-number">{content.experienceNumber}</p>
            <h2 id="experience-title">{content.experienceTitle}</h2>
          </div>
          <div className="experience-list">
            {content.experiences.map((experience, index) => {
              const company = experienceCompanies[index];

              return (
                <article className="experience-card" key={company.company}>
                  <p className="experience-period">{experience.period}</p>
                  <div>
                    <h3>{experience.role}</h3>
                    {company.url ? (
                      <a
                        className="experience-company"
                        href={company.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {company.company} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <p className="experience-company">{company.company}</p>
                    )}
                    <p className="section-copy">{experience.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="full-section content-section projects-section"
          id="proyectos"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <p className="section-number">{content.projectsNumber}</p>
            <h2 id="projects-title">{content.projectsTitle}</h2>
          </div>
          <div className="project-grid">
            {content.projects.map((project, index) => (
              <article className="project-card" key={index}>
                <p className="project-number">{`0${index + 1}`}</p>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="section-copy">{project.description}</p>
                <div className="skill-list">
                  {project.technologies.map((technology) => (
                    <span className="skill-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    className="text-link"
                    href={
                      index === 0
                        ? "https://stringsandkeys.up.railway.app"
                        : "https://axesdev.com"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.link} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          className="full-section content-section education-section"
          id="estudios"
          aria-labelledby="education-title"
        >
          <div className="section-heading">
            <p className="section-number">{content.educationNumber}</p>
            <h2 id="education-title">{content.educationTitle}</h2>
          </div>
          <div className="education-grid">
            {content.education.map((item) => (
              <article className="education-card" key={item.institution}>
                <span className="education-mark" aria-hidden="true">
                  ✳
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="full-section content-section contact-section"
          id="contacto"
          aria-labelledby="contact-title"
        >
          <div className="section-heading">
            <p className="section-number">{content.contactNumber}</p>
            <h2 id="contact-title">{content.contactTitle}</h2>
          </div>
          <p className="contact-intro">{content.contactIntro}</p>
          <div className="contact-links">
            <a href="mailto:palmabboy3@gmail.com">
              <span>{content.email}</span>
              <strong>palmabboy3@gmail.com</strong>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://wa.me/573112513583"
              target="_blank"
              rel="noreferrer"
            >
              <span>WhatsApp</span>
              <strong>+57 311 251 3583</strong>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/Palma97"
              target="_blank"
              rel="noreferrer"
            >
              <span>{content.github}</span>
              <strong>github.com/Palma97</strong>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-palmaf/"
              target="_blank"
              rel="noreferrer"
            >
              <span>{content.linkedin}</span>
              <strong>linkedin.com/in/nicolas-palmaf</strong>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="contact-signoff">{content.signoff}</p>
        </section>
      </main>
    </div>
  );
}
