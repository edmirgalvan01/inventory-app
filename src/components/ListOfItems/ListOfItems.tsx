import "./ListOfItems.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { ClientType, ProductType, SaleType } from "../../types";
import { SaleCard } from "../SaleCard/SaleCard";
import { ClientCard } from "../ClientCard/ClientCard";

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

export function ListOfClients({ clients }: { clients: Array<ClientType> }) {
  return (
    <ul className="listOfProducts">
      {clients.map((client) => (
        <ClientCard
          key={client.id}
          name={client.name}
          total={client.total}
          address={client.address}
          phone_number={client.phone_number}
        />
      ))}
    </ul>
  );
}
