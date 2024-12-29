
import styles from "./company.module.scss"

export const Company = () =>{
  return(
    <section className={styles.companyPage}>
      <article className={styles.textContainer}>
        <h1 className={styles.companyName}>
          Sobre nosso time:
        </h1>
        <p className={styles.teamMessage}>
        Oi! Eu sou o Yann, a pessoa por trás do TaskiFy!
        <br/>
        Esse projeto foi uma mistura de paixão por 
        tecnologia e vontade de criar algo útil para o dia a dia. Cada parte dele foi feita com muito cuidado 
        e dedicação. Espero que o TaskiFy torne suas tarefas mais simples e sua rotina mais organizada, do 
        jeito que imaginei enquanto criava tudo isso.
        </p>
      </article>
    </section>
  )
}
