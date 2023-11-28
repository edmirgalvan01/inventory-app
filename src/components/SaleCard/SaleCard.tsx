import "./SaleCard.css";
import { SaleType } from "../../types";
import { useNavigate } from "react-router-dom";

export function SaleCard({ sale }: { sale: SaleType }) {
  const navigate = useNavigate();

  return (
    <li className="saleCard">
      <div className="saleCard--item">
        <p>Producto</p>
        <small>{sale.product_name}</small>
      </div>
      <div className="saleCard--item">
        <p>Total</p>
        <small>${sale.total}</small>
      </div>
      <div className="saleCard--item">
        <p>Categoria</p>
        <small>{sale.category}</small>
      </div>
      <div className="saleCard--item">
        <p>Cantidad</p>
        <small>{sale.quantity}</small>
      </div>
      <div className="saleCard--item">
        <p>Fecha</p>
        <small>{sale.date}</small>
      </div>
      <div className="saleCard--buttons">
        <button
          className="edit"
          onClick={() => navigate(`/edit-sale/${sale.id}`)}
        >
          Editar
        </button>
        <button className="delete">Eliminar</button>
      </div>
    </li>
  );
}
