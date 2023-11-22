import "./SaleCard.css";

export function SaleCard({
  product_name,
  total,
  category,
  quantity,
  client,
}: {
  product_name: string;
  total: number;
  category: string;
  quantity: number;
  client: string;
}) {
  return (
    <li className="saleCard">
      <div className="saleCard--item">
        <p>Producto</p>
        <small>{product_name}</small>
      </div>
      <div className="saleCard--item">
        <p>Total</p>
        <small>${total}</small>
      </div>
      <div className="saleCard--item">
        <p>Categoria</p>
        <small>{category}</small>
      </div>
      <div className="saleCard--item">
        <p>Cantidad</p>
        <small>{quantity}</small>
      </div>
      <div className="saleCard--item">
        <p>Cliente</p>
        <small>{client}</small>
      </div>
      <div className="saleCard--buttons">
        <button className="edit">Editar</button>
        <button className="delete">Eliminar</button>
      </div>
    </li>
  );
}
