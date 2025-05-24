'use client'
import styles from "./page.module.css"
import { Scene, GLTFModel } from "@/components/three"
import { useCounter } from '@/lib/counter-context'

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { clickCount } = useCounter()

  return (
    <div className={styles.container}>
      <div className={styles.canvasGroup}>
        <div className={styles.canvas}>
          <Scene>
            <GLTFModel path={"/models/cat.glb"} color={"black"} position={[0,0,0]} scale={2}/>
          </Scene>
        </div>
        <p className={styles.counter}>The cat has been clicked {clickCount} times.</p>
      </div>
      
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}