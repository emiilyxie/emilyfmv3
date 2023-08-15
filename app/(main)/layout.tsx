import styles from "./page.module.css"
import { Scene, GLTFModel } from "@/components/three"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      <div className={styles.canvas}>
        <Scene>
          <GLTFModel path={"/models/cat.glb"} color={"black"} position={[0,0,0]} scale={2}/>
        </Scene>
      </div>
      
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}