'use client'
import { ProjectType, ProjectSection } from "@/components/projects"
import styles from "./page.module.css"
import projectData from "../../json/projects.json"

/*
TODOs:
- make draopdown animation yummier
- 404 page
- add photo gallery layout for art and crochet
*/

export default function Home() {

  return (
    <>
        <p className={styles.blurb}>hi everyone i'm emily xie and welcome to my awesome website.</p>
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