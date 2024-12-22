import { Message } from "../components/projects/message"
import { useLocation } from "react-router-dom"


export const Projects = () =>{

  const location = useLocation()
  let message = ""
  if(location.state){
    message = location.state.message
  }

  return(
    <div className="h-[100vh]">
        <h1>Meus projetos</h1>
        {message &&(
          <Message type="sucess" msg={message}/>
        )}
    </div>
  )
}
