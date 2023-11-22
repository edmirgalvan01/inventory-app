import "./ListOfProducts.css";
import { ProductCard } from "../ProductCard/ProductCard";

export function ListOfProducts({
  products,
}: {
  products: Array<{
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
  }>;
}) {
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
