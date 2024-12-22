
import { useEffect, useState } from "react";

interface MessageProps{
  msg: string;
  type: string
}

export const Message = ({msg, type}: MessageProps) =>{

  const [visible, setVisible] = useState(false)

  useEffect(() =>{ //verificar se a mensagme existe
    if(!msg){
      setVisible(false)
      return
    } else{
      setVisible(true)
    }

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return() => clearTimeout(timer)
  }, [msg])



  return(
    <>
    {visible &&(
          <p className="message m-auto bg-green-200 w-[80%] text-center p-2 rounded-md text-green-700 mt-[2.5%] ">{msg}</p>
    )}
    </>

  )
}