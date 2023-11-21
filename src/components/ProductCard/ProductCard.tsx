import "./ProductCard.css";

interface Props {
  name: string;
  price: number;
  category: string;
  stock: number;
}

export function ProductCard({ name, price, category, stock }: Props) {
  return (
    <li className="productCard">
      <div className="productCard--item">
        <p>Nombre</p>
        <small>{name}</small>
      </div>
      <div className="productCard--item">
        <p>Precio</p>
        <small>${price}</small>
      </div>
      <div className="productCard--item">
        <p>Categoria</p>
        <small>{category}</small>
      </div>
      <div className="productCard--item">
        <p>stock</p>
        <small>{stock}</small>
      </div>
      <div className="productCard--buttons">
        <button className="edit">Editar</button>
        <button className="delete">Eliminar</button>
      </div>
    </li>
  );
}
