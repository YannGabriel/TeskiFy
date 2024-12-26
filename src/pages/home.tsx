// imports
import HomeImage from '../images/home-image.svg';
import { LinkButton } from '../components/buttons/newProjectButton';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Bem vindo ao TaskFy!
      </h1>
      <img 
        src={HomeImage} 
        alt="Pessoas trabalhando" 
        className="home-image" 
      />
      <p className="makeProject-text">
        Quer organizar seus projetos?
      </p>
      <LinkButton to="/newproject" text='Criar Projeto agora mesmo!' />
    </div>
  );
};

export default Home;
