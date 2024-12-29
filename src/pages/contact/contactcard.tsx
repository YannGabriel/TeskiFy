import { useState , useEffect } from "react"
import styles from "./contact.module.scss"

interface Contact{
  name?: string,
  link?: string,
  text?: string,
  image?: string
}

export const ContactCard = () =>{
  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(() =>{
    fetch("http://localhost:5000/contacts", {
      method: "GET",
      headers:{
        "Content-Type": "application/json"
      }
    }).then((resp) => resp.json())
    .then((data) =>{
      setContacts(data)
    })
  }, [])

  return(
          <section className={styles.contactsContainer}>
            {contacts.map(contact =>(
              <div className={styles.contactCard}>
                <h3 className={styles.contactName}>{contact.name}</h3>
                <img src={contact.image} alt={contact.name} className={styles.contactImage} />
                <p className={styles.contactText}>
                  {contact.text}
                </p>
                <a className={styles.contactButton} href={contact.link} target="noopener noreferrer">
                  Acesse já!
                </a>
                </div>
            ))}
          </section>
  )
}