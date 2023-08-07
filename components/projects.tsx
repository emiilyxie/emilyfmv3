import styles from './projects.module.css'

export type ProjectType = {
  title: string;
  description: string;
};

export function ProjectItem(props: { project: ProjectType }) {
  return (
    <div>
      <h3 className={styles.projectHeading}>{props.project.title}</h3>
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