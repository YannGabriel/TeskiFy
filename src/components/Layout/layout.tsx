

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/header";
import { Contact } from "../../pages/contact";
import { Projects } from "../../pages/projects";
import { Company } from "../../pages/company";
import Home from "../../pages/home";
import { Footer } from "../Footer/footer";


export const Layout = () =>{
  return (
    <div className="bg-red">
        <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>

    <Footer/>
    </div>
  )
}