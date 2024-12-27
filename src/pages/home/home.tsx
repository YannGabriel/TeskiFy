// imports
import HomeImage from '../../images/home-image.svg';
import { LinkButton } from '../../components/buttons/newProjectButton';
import styles from "./home.module.scss"

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>
        Bem vindo ao TaskiFy!
      </h1>
      <img 
        src={HomeImage} 
        alt="Pessoas trabalhando" 
        className={styles.homeImage} 
      />
      <p className={styles.homeParagraph}>
      Aqui você pode criar, organizar e editar seus projetos de forma simples e eficiente, além de se 
      preparar para qualquer desafio futuro. No Taskify, a gestão das suas tarefas e ideias nunca foi tão 
      fácil e prática!
      </p>
      <p className={styles.homeText}>
        Quer organizar seus projetos?
      </p>
      <div className={styles.createButton}>
        <LinkButton to="/newproject" text='Criar Projeto agora mesmo!' />
      </div>
    </div>
  );
};

export default Home;
