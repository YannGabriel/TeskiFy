

//imports
import HomeImage from '../images/home-image.svg';


const Home = () =>{
  return(
    <div className='h-[80vh]'>
        <h1
        className=' font-bold text-center p-4 text-2xl mt-12 text-darkBlue'
        >Bem vindo ao TaskFy!</h1>
        <img src={HomeImage} alt="Pessoas trabalhando"
        className='w-[85%] m-auto'
        />

        <p className="makeProject text-lg text-center pt-3 text-pastelBlue">
          Quer organizar seus projetos?
        </p>
        <a href="/Projects" className=
        "projectTarget block text-darkBlue font-semibold text-center text-xl"
        >
        Crie seu Projeto!
        </a>
    </div>
  )
}

export default Home