

//imports
import HomeImage from '../images/home-image.svg';
import { Projects } from './projects';

const Home = () =>{
  return(
    <>
        <h1
        className=' font-bold text-center p-4'
        >Bem vindo ao TaskFy!</h1>
        <img src={HomeImage} alt="Pessoas trabalhando"
        className='w-[85%] m-auto flex'
        />

        <p className="makeProject">
          Quer organizar seus projetos?
        </p>
        <a href="/Projects" className="projectTarget">
        Crie seu Projeto!
        </a>
    </>
  )
}

export default Home