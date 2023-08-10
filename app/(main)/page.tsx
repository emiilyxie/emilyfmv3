'use client'
import { ProjectType, ProjectSection } from "@/components/projects"
import { getProjectsData } from "@/lib/localdata"
import styles from "./page.module.css"

/*
TODOs:
- add link to projects
- fill in content
- make resume page link to pdf
- add dropdown animations
- add hover effects
- fix flexbox stuff
- add scroll interaction?
*/

export default function Home(props: { projectSections: {title: string, projects: ProjectType[]}[] }) {

  // TODO: put the data in a local json file
  const projectSections = [
      {
        "title": "Work",
        "projects": [
          {
            "title": "NASA Jet Propulsion Laboratory",
            "description": "Developed planning software for Europa Clipper, a mission launching for Jupiter in 2024.",
            "link": "https://www.jpl.nasa.gov/missions/europa-clipper/"
          },
          {
            "title": "Augmented Perception Lab",
            "description": "Exploring sound perception in virtual reality.",
            "link": "/about"
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
    <>
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
    </>
  )
}