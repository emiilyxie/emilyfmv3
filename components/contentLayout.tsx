import styles from "./contentLayout.module.css"

export default function ContentLayout(props : { children : any[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.canvas}>
        {props.children.length >= 2 ? props.children[0] : <></>}
      </div>
      
      <div className={styles.content}>
        {props.children.length >= 2 ? props.children[1] : props.children[0]}
      </div>
    </div>
  )
}