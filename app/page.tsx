'use client'
import { ProjectType, ProjectSection } from "@/components/projects"
import Scene from "@/components/three"
import { getProjectsData } from "@/lib/localdata"
import styles from "./page.module.css"

export default function Home(props: { projectSections: {title: string, projects: ProjectType[]}[] }) {

  // TODO: put the data in a local json file
  const projectSections = [
      {
        "title": "Work",
        "projects": [
          {
            "title": "NASA Jet Propulsion Laboratory",
            "description": "Developed planning software for Europa Clipper, a mission launching for Jupiter in 2024."
          },
          {
            "title": "Augmented Perception Lab",
            "description": "Exploring sound perception in virtual reality."
          },
          {
            "title": "UCSF",
            "description": "Researching the shape of the meniscus."
          },
          {
            "title": "NASA Jet Propulsion Laboratory",
            "description": "Developed planning software for Europa Clipper, a mission launching for Jupiter in 2024."
          },
          {
            "title": "Augmented Perception Lab",
            "description": "Exploring sound perception in virtual reality."
          },
          {
            "title": "UCSF",
            "description": "Researching the shape of the meniscus."
          },
          {
            "title": "NASA Jet Propulsion Laboratory",
            "description": "Developed planning software for Europa Clipper, a mission launching for Jupiter in 2024."
          },
          {
            "title": "Augmented Perception Lab",
            "description": "Exploring sound perception in virtual reality."
          },
          {
            "title": "UCSF",
            "description": "Researching the shape of the meniscus."
          }
        ]
      },
      {
        "title": "Projects",
        "projects": [
          {
            "title": "JazzCats",
            "description": "i love u"
          },
          {
            "title": "JazzCats",
            "description": "i love u"
          },
          {
            "title": "JazzCats",
            "description": "i love u"
          }
        ]
      }
    ]

  return (
    <div className={styles.container}> 
      {/* TODO: fetch the blurb from somewhere */}
      <div className={styles.canvas}>
        <Scene />
      </div>

      <div className={styles.projectSections}>
        <p className={styles.blurb}>hi i'm emily, an undergraduate at cmu majoring in information systems and computer science. cs is my ultimate passion. four square and seven years ago.</p>
        {
          projectSections.map((projectSection) => (
            <ProjectSection
              key={projectSection.title}
              title={projectSection.title}
              projects={projectSection.projects}
            />
          ))
        }
      </div>

    </div>
  )
}