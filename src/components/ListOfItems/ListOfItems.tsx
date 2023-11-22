import "./ListOfItems.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductType, SaleType } from "../../types";
import { SaleCard } from "../SaleCard/SaleCard";

export function ListOfProducts({ products }: { products: Array<ProductType> }) {
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

export function ListOfSales({ sales }: { sales: Array<SaleType> }) {
  return (
    <ul className="listOfProducts">
      {sales.map((sale) => (
        <SaleCard
          key={sale.id}
          product_name={sale.product_name}
          total={sale.total}
          category={sale.category}
          quantity={sale.quantity}
          client={sale.client}
        />
      ))}
    </ul>
  );
}
