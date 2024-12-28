

import loader from "../../images/Loader.svg"
import styles from "./loader.module.scss"


export const Loader = () =>{
  return(
    <div className={styles.loaderContainer}>
      <img src={loader} alt="loading" className={styles.loaderIcon} />
    </div>
  )
}