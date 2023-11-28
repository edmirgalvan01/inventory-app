import "./ProductCard.css";
import { ProductType } from "../../types";
import { useNavigate } from "react-router-dom";

export function ProductCard({ product }: { product: ProductType }) {
  const navigate = useNavigate();

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
        <button
          className="edit"
          onClick={() => navigate(`/edit-product/${product.id}`)}
        >
          Editar
        </button>
        <button className="delete">Eliminar</button>
      </div>
    </li>
  );
}
