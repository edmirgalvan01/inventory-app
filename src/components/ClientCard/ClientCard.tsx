import "./ClientCard.css";
import { ClientType } from "../../types";
import { useNavigate } from "react-router-dom";

export function ClientCard({ client }: { client: ClientType }) {
  const navigate = useNavigate();

  return (
    <li className="clientCard">
      <div className="clientCard--item">
        <p>Nombre</p>
        <small>{client.name}</small>
      </div>
      <div className="clientCard--item">
        <p>Compras</p>
        <small>${client.total}</small>
      </div>
      <div className="clientCard--item">
        <p>Direccion</p>
        <small>{client.address}</small>
      </div>
      <div className="clientCard--item">
        <p>Numero de telefono</p>
        <small>{client.phone_number}</small>
      </div>
      <div className="clientCard--buttons">
        <button
          className="edit"
          onClick={() => navigate(`/edit-client/${client.id}`)}
        >
          Editar
        </button>
        <button className="delete">Eliminar</button>
      </div>
    </li>
  );
}
