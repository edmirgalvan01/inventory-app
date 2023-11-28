import "./ListOfItems.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { ClientType, ItemTypes, ProductType, SaleType } from "../../types";
import { SaleCard } from "../SaleCard/SaleCard";
import { ClientCard } from "../ClientCard/ClientCard";
import { itemTitle } from "../../consts";

type ListOfItems = Array<ProductType> | Array<SaleType> | Array<ClientType>;

type ListOfItemsProps = {
  type: ItemTypes;
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
  if (items.length === 0) return <p>No hay registros</p>;
  if (error) return <p>Hubo un error {error}</p>;

  return (
    <ul className="listOfItems">
      {type === itemTitle.PRODUCT ? (
        <>
          {items.map((product) => (
            <ProductCard key={product.id} product={product as ProductType} />
          ))}
        </>
      ) : type === itemTitle.CLIENT ? (
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
