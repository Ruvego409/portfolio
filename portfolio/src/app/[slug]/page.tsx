import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ProjectBody } from '@/components/project/ProjectBody'
import { ProjectHero } from '@/components/project/ProjectHero'
import { ProjectIntro } from '@/components/project/ProjectIntro'
import { RelatedProjects } from '@/components/project/RelatedProjects'
import { getProject, getRelated, projects } from '@/data/projects'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  // Strip the authored emphasis markup for the meta description.
  const description = project.overview.replace(/<[^>]+>/g, '')

  return {
    title: project.title,
    description,
    openGraph: { title: project.title, description },
  }
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  return (
    <article>
      <ProjectHero project={project} />
      <ProjectIntro project={project} />
      <ProjectBody project={project} />
      <RelatedProjects projects={getRelated(project)} />
    </article>
  )
}
