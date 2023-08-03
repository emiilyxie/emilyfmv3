export type ProjectType = {
  title: string;
  description: string;
};

export function ProjectItem(props: { project: ProjectType }) {
  return (
    <div>
      <h3>{props.project.title}</h3>
      <p>{props.project.description}</p>
    </div>
  )
}

export function ProjectSection(props: { title: string, projects: ProjectType[] }) {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
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