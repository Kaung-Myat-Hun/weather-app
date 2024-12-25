import styles from './style.module.css'


export const Skeleton = (props : any ) => {
  return (
    <div {...props} className={styles.container}></div>
  )
}
