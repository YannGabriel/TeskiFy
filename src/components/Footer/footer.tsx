//Icons
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";


export const Footer = () =>{
  return(
    <footer className="footer-bottom bg-black text-white rounded-tr-[16px] rounded-tl-[16px]
     p-4 w-[100%] pb-32">
      <h1 className="devName font-bold pt-3 pb-2">Yann Gabriel</h1>
      <p className="about-project w-[45%] inline-flex">
        Projeto feito por cursos do YouTube para treinamento de técnicas em react, typescript e bibliotecas dos mesmos!
      </p>

      <div className="socialMedias inline-flex w-[20%] justify-between pl-8 ml-32">
        <a href="https://linkedin.com/in/yann-gabriel-dev" target="blank" className="mediaTarget" id="Linkedin">
          <SlSocialLinkedin/>
          </a>
          <a href="https://github.com/YannGabriel" target="blank" className="mediaTarget" id="Github">
          <SlSocialGithub/>
          </a>
          <a href="" className="mediaTarget" id="Whatsapp">
          <FaWhatsapp/>
          </a>
      </div>
    </footer>
  )
}