import { ProjectForm } from "../../components/Form/form";
import { useNavigate } from "react-router-dom";

export const NewProject = () => {
  const navigate = useNavigate();

  function createPost(project: any) {
    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((project) => project.json())
      .then((data) => {
        console.log(data);
        //redirect
        navigate("/projects", {
          state: { message: "Projeto criado com sucesso!" },
        });
      })
      .catch((err) => console.log("Erro", err));
  }

  return (
    <div className="NewProjectPage">
      <h1 id="pageCalledTittle">
        Crie seu Projeto!
      </h1>

      <p id="aboutTittle">
        Crie seus projetos, se organize e melhore sua produtividade!
      </p>

      <ProjectForm handleSubmit={createPost} />
    </div>
  );
};
