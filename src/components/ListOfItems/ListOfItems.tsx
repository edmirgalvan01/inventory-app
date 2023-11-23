import "./ListOfItems.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { ClientType, ProductType, SaleType } from "../../types";
import { SaleCard } from "../SaleCard/SaleCard";
import { ClientCard } from "../ClientCard/ClientCard";

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

type ListOfItems = Array<ProductType> | Array<SaleType> | Array<ClientType>;

export function ListOfItems({
  type,
  items,
  isLoading,
  error,
}: {
  type: "PRODUCTS" | "CLIENTS" | "SALES";
  items: ListOfItems;
  isLoading: boolean;
  error: string | null;
}) {
  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Hubo un error {error}</p>;
  }

  return (
    <ul className="listOfProducts">
      {type === "PRODUCTS" ? (
        <>
          {items.map((product) => (
            <ProductCard key={product.id} product={product as ProductType} />
          ))}
        </>
      ) : type === "CLIENTS" ? (
        <>
          {items.map((client) => (
            <ClientCard key={client.id} client={client as ClientType} />
          ))}
        </>
      ) : (
        <>
          {items.map((sale) => (
            <SaleCard key={sale.id} sale={sale as SaleType} />
          ))}
        </>
      )}
    </ul>
  );
}
