
interface SelectProps{
  name: string
}

export const Select = ({name}: SelectProps) =>{
  return(
    <select name={name} id={name} className="border-0 border-b-[1px] border-lightBlue outline-none focus:border-darkBlue :border-b-[2px] block m-auto w-[70%] mt-6">
    <option >Escolha a categoria: </option>
  </select>
  )
}