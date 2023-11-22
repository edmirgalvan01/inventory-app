import "./ListOfItems.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { ClientType, ProductType, SaleType } from "../../types";
import { SaleCard } from "../SaleCard/SaleCard";
import { ClientCard } from "../ClientCard/ClientCard";

export function ListOfProducts({ products }: { products: Array<ProductType> }) {
  return (
    <ul className="listOfProducts">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

export function ListOfSales({ sales }: { sales: Array<SaleType> }) {
  return (
    <ul className="listOfProducts">
      {sales.map((sale) => (
        <SaleCard key={sale.id} sale={sale} />
      ))}
    </ul>
  );
}

export function ListOfClients({ clients }: { clients: Array<ClientType> }) {
  return (
    <ul className="listOfProducts">
      {clients.map((client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </ul>
  );
}
