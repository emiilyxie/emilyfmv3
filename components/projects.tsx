import { useState } from 'react'
import styles from './projects.module.css'

export type ProjectType = {
  title: string;
  description: string;
};

export function ProjectItem(props: { project: ProjectType }) {

  const [isExpanded, setIsExpanded] = useState(false)

  let toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <div className={styles.projectHeading}>
        {/* TODO: get out of className hell */}
        <h3 className={styles.projectHeadingText}>{props.project.title}</h3>
        <button onClick={toggleExpanded} className={styles.projectHeadingButton}>{isExpanded ? "-" : "+"}</button>
      </div>
      {isExpanded &&
      <p className={styles.projectDescription}>{props.project.description}</p>
      }
    </div>
  )
}

export function ProjectSection(props: { title: string, projects: ProjectType[] }) {
  return (
    <div>
      <div>
        <h2 className={styles.projectSectionHeader}>{`(${props.title})`}</h2>
      </div>

      {props.projects.map((project) => (
        <ProjectItem
          key={project.title}
          project={project}        
        />
      ))}
    </div>
  )
}