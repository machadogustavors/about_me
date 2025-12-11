import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../lib/data';

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: slugify(p.title) }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => slugify(p.title) === params.slug);
  if (!project) return { title: 'Projeto' };
  return {
    title: `${project.title} — Gustavo Machado`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: `https://portfolio-gustavo-omega.vercel.app${project.image}`,
          alt: project.title,
        },
      ],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => slugify(p.title) === params.slug);
  if (!project) return (
    <div className="max-w-4xl mx-auto py-20">
      <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
      <p className="mt-4">Verifique se a URL está correta.</p>
      <Link href="/">Voltar para o início</Link>
    </div>
  );

  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-6">{project.description}</p>

      {project.image && (
        <div className="mb-6">
          <Image
            src={project.image}
            alt={project.title}
            width={1000}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
      )}

      {project.technologies && (
        <div className="mb-6">
          <h3 className="font-semibold">Tecnologias</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((t: string) => (
              <span key={t} className="px-3 py-1 bg-slate-100 rounded-full text-sm">{t}</span>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        {Array.isArray(project.github) && project.github.map((g: any) => (
          <a key={g.url} href={g.url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded">{g.label || 'Código'}</a>
        ))}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-200 rounded">Ver Demo</a>
        )}
      </div>

      <div className="mt-8">
        <Link href="/">← Voltar</Link>
      </div>
    </main>
  );
}
