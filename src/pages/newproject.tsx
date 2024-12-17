
import { ProjectForm } from "../Form/form"


export const NewProject = () =>{
  return(
    <div className="NewProjectPage min-h-[80vh]">
        <h1 id="pageCalledTittle" className="text-2xl font-bold pt-10 pl-5">
          Crie seu Projeto!
        </h1>

        <p id="aboutTittle" className="pt-2 pl-5 first-letter:pl-6">
          Crie seus projetos, se organize e melhore sua produtividade!
        </p>

        <ProjectForm/>
    </div>
  )
}