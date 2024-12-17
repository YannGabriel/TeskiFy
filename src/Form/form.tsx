
//Input configs
interface inputProps{
  type: string;
  placeholder: string
}


//Input JSX
export const Input = ({type, placeholder}:inputProps) =>{
  return(
    <input type={type} placeholder={placeholder}
    className="border-0 border-b-[1px] border-lightBlue outline-none focus:border-darkBlue :border-b-[2px] block m-auto w-[70%] mt-2" />
  )
}


//All forms
export const ProjectForm = () =>{
  return(
    <form
    className="mt-[5%]">
      <Input
      type="text"
      placeholder="Insira o nome do projeto"
      />
      <textarea name="ProjectInfos" id="ProjectInfos" placeholder="Descrição do projeto"
      className="w-[70%] border-[1px] border-lightBlue rounded-xl m-auto block p-2 mt-[2.5%] outline-none 
       focus:border-darkBlue">
      </textarea>

      <span className="InputDetail w-[70%] block m-auto pt-2 text-sm text-darkBlue">
        Data de Inicio
      </span>
      <Input 
      type="date"
      placeholder="Data de Inicio"
      />

      <span className="InputDetail w-[70%] block m-auto pt-5 text-sm text-darkBlue">
        Data de Termino (prevista)
      </span>

      <Input 
            type="date"
            placeholder="Data de Término (prevista)"
            />

    </form>
  )
}