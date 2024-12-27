import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./footer.module.scss"

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerTextContent}>
        <h1 className={styles.footerName}>Yann Gabriel</h1>
        <p className={styles.footerParagraph}>
          Projeto feito por cursos do online para treinamento de técnicas em react, typescript e bibliotecas dos mesmos!
        </p>
      </div>

      <div className={styles.mediaContent}>
        <a href="https://linkedin.com/in/yann-gabriel-dev" target="blank" className={styles.footerIcon} id="Linkedin">
          <SlSocialLinkedin />
        </a>
        <a href="https://github.com/YannGabriel" target="blank" className={styles.footerIcon} id="Github">
          <SlSocialGithub />
        </a>
        <a href="/" className={styles.footerIcon} id="Whatsapp">
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};
