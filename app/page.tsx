import { ProjectType, ProjectSection } from "@/components/projects"
import { getProjectsData } from "@/lib/localdata"

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
      <p>hello world</p>
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