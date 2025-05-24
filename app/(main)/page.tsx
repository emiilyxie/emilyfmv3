'use client'
import { ProjectType, ProjectSection } from "@/components/projects"
import styles from "./page.module.css"
import projectData from "../../json/projects.json"
import { useCounter } from '@/lib/counter-context'

/*
TODOs:
- make draopdown animation yummier
- 404 page
- add photo gallery layout for art and crochet
*/

export default function Home() {
  const { clickCount } = useCounter()

  return (
    <>
        <p className={styles.blurb}>i'm emily xie, and welcome to my website.</p>
        <p className={styles.counter}>Cat has been clicked {clickCount} times</p>
        {
          projectData.projectSections.map((projectSection) => (
            <ProjectSection
              key={projectSection.title}
              title={projectSection.title}
              projects={projectSection.projects}
            />
          ))
        }
    </>
  )
}