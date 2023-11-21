import "./ListOfProducts.css";
import { ProductCard } from "../ProductCard/ProductCard";
import products from "../../mocks/products.json";

export function ListOfProducts() {
  return (
    <ul className="listOfProducts">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          stock={product.stock}
        />
      ))}
    </ul>
  );
}
