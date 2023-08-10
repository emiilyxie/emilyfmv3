import { useState } from 'react'
import styles from './projects.module.css'
import Link from 'next/link'

export type ProjectType = {
  title: string;
  description: string;
  link?: string;
};

export function ProjectItem(props: { project: ProjectType }) {

  const [isExpanded, setIsExpanded] = useState(false)

  let toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <button onClick={toggleExpanded} className={styles.projectHeading}>
          {/* TODO: get out of className hell */}
          <h3 className={styles.projectHeadingText}>{props.project.title}</h3>
          <p className={styles.projectHeadingButton}>{isExpanded ? "-" : "+"}</p>
      </button>
      {
        isExpanded &&
        <div className={styles.projectDescription}>
          <p className={styles.projectDescriptionText}>{props.project.description}</p>
          {
            props.project.link &&
            <Link href={props.project.link} className={styles.projectDescriptionLink}>Learn More</Link>
          }
          
        </div>
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