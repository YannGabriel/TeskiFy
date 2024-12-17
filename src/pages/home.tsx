

//imports
import HomeImage from '../images/home-image.svg';
import { LinkButton } from '../components/buttons/newProjectButton';


const Home = () =>{
  return(
    <div className=' pb-14 lg:h-[98vh]'>
        <h1
        className=' font-bold text-center p-4 text-2xl mt-12 text-darkBlue
          lg:text-4xl lg:text-start  lg:pl-[4%]'
        >Bem vindo ao TaskFy!</h1>
        <img src={HomeImage} alt="Pessoas trabalhando"
        className='md:w-[85%] md:m-auto
        lg:w-[35%] lg:float-right lg:mr-[10%]'
        />

        <p className="makeProject md:text-lg text-center pt-3 text-pastelBlue
         lg:text-2xl md:text-start md:pl-[5%]">
          Quer organizar seus projetos?
        </p>
        <LinkButton to='/newproject' text='Criar Projeto'/>
    </div>
  )
}

export default Home