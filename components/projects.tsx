import { useRef, useState, useLayoutEffect, useEffect } from 'react'
import styles from './projects.module.css'
import Link from 'next/link'
import { gsap } from 'gsap';

export type ProjectType = {
  title: string;
  description: string;
  link?: string;
};

export function ProjectItem(props: { project: ProjectType }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const root = useRef(null)
  const descRef = useRef(null)
  const tl = useRef<GSAPTimeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from(descRef.current, {height: 0, opacity: 0, margin: 0, duration: 0.5})
    }, root);
    return () => ctx.revert();
  }, [])

  useEffect(() => {
    tl.current?.reversed(!isExpanded);
  }, [isExpanded])

  return (
    <div className={styles.projectWrapper} ref={root}>
      <button onClick={() => setIsExpanded(!isExpanded)} className={styles.projectHeading}>
          {/* TODO: get out of className hell */}
          <h3 className={styles.projectHeadingText}>{props.project.title}</h3>
          <p className={styles.projectHeadingButton}>{isExpanded ? "-" : "+"}</p>
      </button>
      <div className={styles.projectDescription} ref={descRef}>
        <p className={styles.projectDescriptionText}>{props.project.description}</p>
        {
          props.project.link &&
          <Link href={props.project.link} className={styles.projectDescriptionLink}>Learn More</Link>
        }
      </div>
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