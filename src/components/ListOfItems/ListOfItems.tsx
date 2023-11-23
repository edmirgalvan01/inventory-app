import "./ListOfItems.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { ClientType, ProductType, SaleType } from "../../types";
import { SaleCard } from "../SaleCard/SaleCard";
import { ClientCard } from "../ClientCard/ClientCard";

type ListOfItems = Array<ProductType> | Array<SaleType> | Array<ClientType>;

type ListOfItemsProps = {
  type: "PRODUCTS" | "CLIENTS" | "SALES";
  items: ListOfItems;
  isLoading: boolean;
  error: string | null;
};

export function ListOfItems({
  type,
  items,
  isLoading,
  error,
}: ListOfItemsProps) {
  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Hubo un error {error}</p>;

  return (
    <ul className="listOfItems">
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
