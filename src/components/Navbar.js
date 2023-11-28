import { Link } from "react-router-dom";
import { AiOutlineSave } from "react-icons/ai";
import { SiFirebase } from "react-icons/si";

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand d-flex" to="/">
        <SiFirebase size="2rem" className="me-2" />
        LISTA DE TAREAS
      </Link>
      
      <div >
            <Link
              className="d-flex align-items-center btn btn-primary shadow-none"
              to="/add"
            >
              <AiOutlineSave className="me-1" size="2rem" />
              Nueva tarea
            </Link>
          
      </div>
    </div>
  </nav>
);
