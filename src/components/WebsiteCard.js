import { updateWebsite, deleteWebsite } from "../firebase/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export function WebsiteCard({ link }) {
  const navigate = useNavigate();


  
  const onUpdateLink = async (id) => {
    const updatedLink = { ...link, completed: !link.completed };
    await updateWebsite(id, updatedLink);
    toast(`Tarea marcada como ${updatedLink.completed ? "terminada" : "pendiente"}`, {
      type: "success",
      autoClose: 2000,
    });
  };

  const onDeleteLink = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres borrar la tarea?")) {
      await deleteWebsite(id);
      toast("Tarea eliminada correctamente", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  const handleClick = () => {
    if (!link.completed) {
      navigate(`/edit/${link.id}`);
    }
  };

  const isTaskCompleted = link.completed;

  return (


    
    <div
      className={`card mb-3 card-website ${isTaskCompleted ? "completed-task" : "pending-task"}`}
      key={link.id}
      onClick={handleClick}
    >



      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4>{link.name}</h4>
          <div className="d-flex">
            <button
              className="btn btn-success btn-sm mr-2 d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                onUpdateLink(link.id);
              }}
              disabled={isTaskCompleted}
            >
              <i className="material-icons">done</i>
            </button>
            <button
              className="btn btn-danger btn-sm d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteLink(link.id);
              }}
            >
              <i className="material-icons">close</i>
            </button>
          </div>
        </div>
        <p>{link.description}</p>
        <p>{isTaskCompleted ? "Tarea Terminada" : "Tarea Pendiente"}</p>
      </div>
    </div>
  );
}
