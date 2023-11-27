import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { saveWebsite, getWebsite, updateWebsite } from "../firebase/api";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  url: "",
  name: "",
  description: "",
};
export const WebsiteForm = (props) => {
  const [website, setWebsite] = useState(initialState);
  const params = useParams();
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) =>
    setWebsite({ ...website, [name]: value });

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!params.id) {
      await saveWebsite(website);
      toast("Tarea Agregada", {
        type: "success",
      });
    } else {
      await updateWebsite(params.id, website);
      toast("Tarea Actualizada", {
        type: "success",
      });
    }

    // Clean Form
    setWebsite(initialState);
    navigate("/");
  };

  const getLinkById = async (id) => {
    try {
      const doc = await getWebsite(id);
      setWebsite({ ...doc.data() });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getLinkById(params.id);
    }
  }, [params.id]);

  return (
    <div className="col-md-4 offset-md-4">
      <form onSubmit={handleSubmit} className="card card-body bg-secondary">
       

        <label htmlFor="name">Nombre de la tarea:</label>
        <div className="input-group">
          <div className="input-group-text bg-dark">
            <i className="material-icons">create</i>
          </div>
          <input
            type="text"
            value={website.name}
            name="name"
            placeholder="Nombre de la tarea"
            className="form-control mb-3"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="description">Descripción de la tarea:</label>
        <textarea
          rows="3"
          className="form-control mb-3"
          placeholder="Descripción de la tarea"
          name="description"
          value={website.description}
          onChange={handleInputChange}
        ></textarea>

        <button
          className="btn btn-primary btn-block"
          disabled={!website.name}
        >
          {props.currentId === "" ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};
