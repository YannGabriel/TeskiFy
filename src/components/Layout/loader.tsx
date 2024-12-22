

import loader from "../../images/Loader.svg"


export const Loader = () =>{
  return(
    <div className="loaderContainer w-[100%] h-[100vh] flex justify-center ">
      <img src={loader} alt="loading" className="w-[48px] animate-spin360" />
    </div>
  )
}