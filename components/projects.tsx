import styles from './projects.module.css'

export type ProjectType = {
  title: string;
  description: string;
};

export function ProjectItem(props: { project: ProjectType }) {
  return (
    <div>
      <div className={styles.projectHeading}>
        {/* TODO: get out of className hell */}
        <h3 className={styles.projectHeadingText}>{props.project.title}</h3>
        <span className={styles.projectHeadingButton}>+</span>
      </div>
      <p className={styles.projectDescription}>{props.project.description}</p>
    </div>
  )
}

export function ProjectSection(props: { title: string, projects: ProjectType[] }) {
  return (
    <div>
      <div>
        <h2 className={styles.projectSectionHeader}>{props.title}</h2>
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