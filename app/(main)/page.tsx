'use client'
import { ProjectType, ProjectSection } from "@/components/projects"
import styles from "./page.module.css"
import projectData from "../../json/projects.json"

/*
TODOs:
- add dropdown animations
- fill in content
*/

export default function Home(props: { projectSections: {title: string, projects: ProjectType[]}[] }) {

  return (
    <>
        <p className={styles.blurb}>hi i'm emily, an undergraduate at cmu majoring in information systems and computer science. cs is my ultimate passion. four square and seven years ago.</p>
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