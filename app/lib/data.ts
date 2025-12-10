
export const personalInfo = {
  name: "Gustavo Machado",
  role: "Full-Stack Developer",
  tagline: "Construindo aplicações web rápidas, escaláveis e de alta qualidade",
  email: "machado.gustavo2905@gmail.com",
  github: "https://github.com/machadogustavors",
  linkedin: "www.linkedin.com/in/gustavo-machado-416326215",
  location: "Brasil",
};

export const aboutMe = {
  title: "Sobre mim",
  description: `Sou um desenvolvedor full-stack com foco em criar aplicações web rápidas, escaláveis e bem estruturadas. Trabalho diariamente com React, Next.js, TypeScript, Node.js e serviços em nuvem como AWS, construindo tanto frontends eficientes quanto backends robustos.`,
  highlights: [
    "Desenvolvimento de SaaS, CRMs e dashboards interativos",
    "Integrações com APIs externas (incluindo mensageria e automações)",
    "Arquitetura de sistemas, banco de dados e infraestrutura escalável",
    "Otimização de performance e boas práticas de código",
  ],
  philosophy: `Gosto de resolver problemas reais com soluções simples, diretas e de alta qualidade. Meu foco sempre é: entregar rápido sem perder estrutura, pensando desde o início em escalabilidade, experiência do usuário e manutenção futura.`,
  learning: "Estou sempre em evolução, aprendendo novas tecnologias e construindo projetos que realmente fazem diferença.",
};

export const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "Python", level: 95 },
      { name: "PostgreSQL", level: 95 },
    ],
  },
  {
    category: "DevOps & Cloud",
    technologies: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 90 },
      { name: "Git", level: 95 },
      { name: "CI/CD", level: 90 },
    ],
  },
  {
    category: "Outros",
    technologies: [
      { name: "REST APIs", level: 95 },
      { name: "DynamoDB", level: 75 },
      { name: "Alembic", level: 80 },
      { name: "Prisma", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "SaaS Platform",
    description: "Plataforma SaaS completa com autenticação, pagamentos e dashboard interativo para gerenciamento de clientes.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS"],
    image: "/projects/saas.jpg",
    github: "https://github.com/machadogustavors/projeto",
    demo: "",
    featured: true,
  },
];

export const contactInfo = {
  title: "Vamos trabalhar juntos?",
  description: "Estou sempre aberto a novos projetos e oportunidades. Entre em contato!",
  email: "machado.gustavo2905@gmail.com",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/machadogustavors",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/gustavo-machado-416326215",
      icon: "linkedin",
    },
  ],
};
