import { useRef, useState, useLayoutEffect, useEffect } from 'react'
import styles from './projects.module.css'
import Link from 'next/link'
import { gsap } from 'gsap';

export type ProjectType = {
  title: string;
  description: string;
  link?: string;
  color?: string;
};

export function ProjectItem(props: { 
  project: ProjectType;
  onHover?: (color: string | undefined) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const root = useRef(null)
  const descRef = useRef(null)
  const tl = useRef<GSAPTimeline>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({paused: true})
        .to(descRef.current, {height: "auto", opacity: 1, marginTop: "1em", duration: 0.5})
      
      tl.current?.paused(false)
    }, root);
    return () => ctx.revert();
  }, [])

  useEffect(() => {
    tl.current?.reversed(!isExpanded);
  }, [isExpanded])

  return (
    <div 
      className={styles.projectWrapper} 
      ref={root}
      onMouseEnter={() => {
        props.onHover?.(props.project.color || "black");
      }}
      onMouseLeave={() => {
        props.onHover?.("black");
      }}
    >
      <button onClick={() => setIsExpanded(!isExpanded)} className={styles.projectHeading}>
          <h3 className={styles.projectHeadingText}>{props.project.title}</h3>
          <p className={styles.projectHeadingButton}>{isExpanded ? "-" : "+"}</p>
      </button>
      <div className={styles.projectDescription} ref={descRef}>
        <div className={styles.projectDescriptionText} dangerouslySetInnerHTML={{ __html: props.project.description}}></div>
        {
          props.project.link &&
          <Link href={props.project.link} 
            className={styles.projectDescriptionLink}
            target={props.project.link.charAt(0) == "/" ? "_self" : "_blank"}>
              Learn More
          </Link>
        }
      </div>
    </div>
  )
}

export function ProjectSection(props: { 
  title: string, 
  projects: ProjectType[];
  onProjectHover?: (color: string | undefined) => void;
}) {
  return (
    <div>
      <div>
        <h2 className={styles.projectSectionHeader}>{`(${props.title})`}</h2>
      </div>

      {props.projects.map((project) => (
        <ProjectItem
          key={project.title}
          project={project}
          onHover={(color) => {
            props.onProjectHover?.(color);
          }}
        />
      ))}
    </div>
  )
}