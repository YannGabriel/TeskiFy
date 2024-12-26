import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer-bottom">
      <h1 className="devName">Yann Gabriel</h1>
      <p className="about-project">
        Projeto feito por cursos do YouTube para treinamento de técnicas em react, typescript e bibliotecas dos mesmos!
      </p>

      <div className="socialMedias">
        <a href="https://linkedin.com/in/yann-gabriel-dev" target="blank" className="mediaTarget" id="Linkedin">
          <SlSocialLinkedin />
        </a>
        <a href="https://github.com/YannGabriel" target="blank" className="mediaTarget" id="Github">
          <SlSocialGithub />
        </a>
        <a href="/" className="mediaTarget" id="Whatsapp">
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};
