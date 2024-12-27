


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/header";
import { Contact } from "../../pages/contact/contact";
import { Projects } from "../../pages/project/projects";
import { Company } from "../../pages/company/company";
import Home from "../../pages/home/home";
import { Footer } from "../Footer/footer";
import { NewProject } from "../../pages/newproject/newproject";

export const Layout = () => {
  return (
    <div className="bg-red ">
      {/* Envolva toda a estrutura com o Router */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} /> {/* Adicionada a rota para /newproject */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
