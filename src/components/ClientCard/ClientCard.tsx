import "./ClientCard.css";

export function ClientCard({
  name,
  total,
  address,
  phone_number,
}: {
  name: string;
  total: number;
  address: string;
  phone_number: number;
}) {
  return (
    <li className="clientCard">
      <div className="clientCard--item">
        <p>Nombre</p>
        <small>{name}</small>
      </div>
      <div className="clientCard--item">
        <p>Compras</p>
        <small>${total}</small>
      </div>
      <div className="clientCard--item">
        <p>Direccion</p>
        <small>{address}</small>
      </div>
      <div className="clientCard--item">
        <p>Numero de telefono</p>
        <small>{phone_number}</small>
      </div>
      <div className="clientCard--buttons">
        <button className="edit">Editar</button>
        <button className="delete">Eliminar</button>
      </div>
    </li>
  );
}
