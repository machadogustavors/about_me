
export const personalInfo = {
  name: "Gustavo Machado",
  role: "Full-Stack Developer",
  tagline: "Construindo aplicações web rápidas, escaláveis e de alta qualidade",
  email: "machado.gustavo2905@gmail.com",
  github: "https://github.com/machadogustavors",
  linkedin: "https://www.linkedin.com/in/gustavo-machado-416326215",
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
    title: "Scheduly - Agendamentos de tarefas online",
    description: "Plataforma de uso pessoal para agendamento de tarefas e compromissos, estilo calendário do Microsoft Teams com notificações desktop.",
    technologies: ["React", "TypeScript", "Python", "DynamoDB", "AWS"],
    image: "/projects/scheduly.png",
    github: [
      { label: "Frontend", url: "https://github.com/machadogustavors/scheduly_frontend" },
      { label: "Backend", url: "https://github.com/machadogustavors/scheduly_backend" },
    ],
    demo: "",
    featured: true,
  },
  {
    id: 2,
    title: "WM Manager - Sistema de gestão para oficina mecânica",
    description: "Plataforma de gestão completa para oficina com controle de serviços.",
    technologies: ["React", "TypeScript", "Python", "DynamoDB", "AWS"],
    image: "/projects/wm_manager.png",
    github: [
      { label: "Frontend", url: "https://github.com/machadogustavors/wm_manager_front" },
      { label: "Backend", url: "https://github.com/machadogustavors/wm_manager_back" },
    ],
    demo: "",
    featured: true,
  },
  {
    id: 3,
    title: "Project Coordinator - Sistema de gestão para projetos pessoais",
    description: "Plataforma de gestão completa para projetos pessoais com controle de tarefas, prazos e progresso.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Vercel"],
    image: "/projects/project_coordinator.png",
    github: [
      { label: "Project", url: "https://github.com/machadogustavors/project_coordinator" },
    ],
    demo: "",
    featured: false,
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
      url: "https://www.linkedin.com/in/gustavo-machado-416326215",
      icon: "linkedin",
    },
  ],
};
