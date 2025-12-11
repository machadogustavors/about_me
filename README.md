# 🚀 Portfolio Pessoal - Gustavo Machado

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=for-the-badge&logo=framer)

  **Portfolio moderno e interativo com animações fluidas e design responsivo**

  [🌐 Ver Demo](https://portfolio-gustavo-omega.vercel.app) | [📝 Documentação](#características) | [🐛 Reportar Bug](https://github.com/machadogustavors/about_me/issues)

</div>

---

## ✨ Características

- 🎨 **Design Moderno**: Interface clean com gradientes vibrantes e efeitos glassmorphism
- 🎭 **Animações Fluidas**: Transições suaves com Framer Motion
- 📱 **100% Responsivo**: Adaptação perfeita para mobile, tablet e desktop
- 🎪 **Slider Inteligente**: Carrossel de projetos que se adapta ao tamanho da tela
- 🎯 **SEO Otimizado**: Meta tags completas, sitemap e robots.txt
- ⚡ **Performance**: Otimizado com Next.js 15 e App Router
- 🎨 **Tema Dark**: Design moderno com paleta roxa/ciano

## 🛠️ Tecnologias

### Core
- **Next.js 15** - Framework React com SSR e App Router
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS** - Estilização utilitária e responsiva
- **Framer Motion** - Animações e transições

### Bibliotecas
- **lucide-react** - Ícones modernos e customizáveis
- **React Hooks** - useState, useEffect, useRef, useInView

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/machadogustavors/about_me.git

# Entre na pasta
cd about_me

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
about_me/
├── app/
│   ├── components/
│   │   ├── Hero.tsx        # Seção de apresentação inicial
│   │   ├── About.tsx       # Sobre mim com highlights
│   │   ├── Skills.tsx      # Skills com progress bars animadas
│   │   ├── Projects.tsx    # Slider de projetos
│   │   └── Contact.tsx     # Formulário de contato
│   ├── lib/
│   │   └── data.ts         # Dados centralizados (fácil de editar)
│   ├── layout.tsx          # Layout e metadata SEO
│   ├── page.tsx            # Página principal
│   ├── globals.css         # Estilos globais
│   └── sitemap.ts          # Sitemap para SEO
├── public/
│   └── robots.txt          # Configuração para crawlers
└── README.md               # Você está aqui!
```

## 🎨 Seções

### 🏠 Hero
- Apresentação com nome e título
- Ícones de redes sociais animados
- Background com círculos flutuantes
- Botão de scroll suave

### 👤 About
- Descrição pessoal
- Grid de highlights com ícones
- Animações on-scroll

### 💡 Skills
- 4 categorias de skills (Frontend, Backend, Database, Cloud & DevOps)
- Progress bars animadas com gradiente
- Cards com hover effects

### 🚀 Projects
- **Slider responsivo**: 3 projetos (desktop), 2 (tablet), 1 (mobile)
- Filtro: Todos / Destaques
- Navegação com setas e dots
- Links para GitHub e Demo
- Badge especial para projetos em destaque

### 📧 Contact
- CTA com botão de email
- Links de redes sociais com animações
- Background animado

## 🎯 Como Personalizar

### 1. Editar Informações Pessoais

Abra `app/lib/data.ts` e atualize:

```typescript
export const personalInfo = {
  name: "Seu Nome",
  title: "Seu Título",
  tagline: "Sua descrição",
  // ...
};
```

### 2. Adicionar Novo Projeto

```typescript
export const projects = [
  // ...projetos existentes,
  {
    id: 5,
    title: "Meu Novo Projeto",
    description: "Descrição do projeto...",
    technologies: ["React", "Node.js"],
    github: "https://github.com/usuario/repo",
    demo: "https://demo.com",
    featured: false
  }
];
```

### 3. Atualizar Skills

```typescript
export const skills = [
  {
    category: "Nova Categoria",
    icon: "Code2", // ícone do lucide-react
    technologies: [
      { name: "Tecnologia", level: 90 }
    ]
  }
];
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Deploy automático! 🎉

### Outras Opções
- **Netlify**: Similar ao Vercel
- **Railway**: Deploy com Docker
- **GitHub Pages**: Export estático com `npm run build`

## 📈 SEO

- ✅ Meta tags completas (Open Graph, Twitter Cards)
- ✅ Sitemap.xml automático
- ✅ Robots.txt configurado
- ✅ Semantic HTML
- ✅ Performance otimizada

**Após deploy**: Atualize as URLs em `layout.tsx`, `sitemap.ts` e `robots.txt`

## 🎨 Customização de Cores

As cores principais estão em `globals.css` e componentes:

- **Primária**: `purple-500` (#8B5CF6)
- **Secundária**: `cyan-500` (#06B6D4)
- **Background**: `gray-900` (#111827)
- **Texto**: `white` / `gray-400`

## 📝 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm start        # Servidor de produção
npm run lint     # Verificar erros ESLint
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer um Fork do projeto
2. Criar uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Gustavo Machado**

- GitHub: [@machadogustavors](https://github.com/machadogustavors)
- LinkedIn: [Seu LinkedIn](#)
- Email: seu-email@exemplo.com

---

<div align="center">
  
  **⭐ Se este projeto te ajudou, deixe uma estrela!**
  
  Feito com ❤️ e ☕ por Gustavo Machado
  
</div>
