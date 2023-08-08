import styles from "./page.module.css"
import Scene from "@/components/three"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      <div className={styles.canvas}>
        <Scene path="./models/cat.glb"/>
      </div>
      
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}