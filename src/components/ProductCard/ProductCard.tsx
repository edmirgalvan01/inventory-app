import { ProductType } from "../../types";
import "./ProductCard.css";

export function ProductCard({ product }: { product: ProductType }) {
  return (
    <li className="productCard">
      <div className="productCard--item">
        <p>Nombre</p>
        <small>{product.name}</small>
      </div>
      <div className="productCard--item">
        <p>Precio</p>
        <small>${product.price}</small>
      </div>
      <div className="productCard--item">
        <p>Categoria</p>
        <small>{product.category}</small>
      </div>
      <div className="productCard--item">
        <p>stock</p>
        <small>{product.stock}</small>
      </div>
      <div className="productCard--buttons">
        <button className="edit">Editar</button>
        <button className="delete">Eliminar</button>
      </div>
    </li>
  );
}
