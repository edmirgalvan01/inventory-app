import { SaleType } from "../../types";
import "./SaleCard.css";

export function SaleCard({ sale }: { sale: SaleType }) {
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
      <div className="saleCard--item">
        <p>Cliente</p>
        <small>{sale.client}</small>
      </div>
      <div className="saleCard--buttons">
        <button className="edit">Editar</button>
        <button className="delete">Eliminar</button>
      </div>
    </li>
  );
}
