import { Bookshelf } from '@/components/bookshelf/Bookshelf'
import { AboutTeaser } from '@/components/home/AboutTeaser'
import { Experience } from '@/components/home/Experience'
import { projects } from '@/data/projects'

export default function HomePage() {
  return (
    <>
      <h1 className="visuallyHidden">Danylo Vasiur — graphic designer portfolio</h1>
      <Bookshelf projects={projects} />
      <AboutTeaser />
      <Experience />
    </>
  )
}
