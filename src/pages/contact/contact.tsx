
import { ContactCard } from "./contactcard"
import styles from "./contact.module.scss"


 export const Contact = () =>{

  return(
    <section className={styles.contactsPage}>
      <h2 className={styles.pageName}>Contatos: </h2>
      <div className={styles.ContactContainer}>
      <ContactCard/>
      </div>
    </section>
  )
  
}
