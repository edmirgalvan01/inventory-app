import { ClientType, ProductType, SaleType } from "../../types";
import { ClientCard } from "../ClientCard/ClientCard";
import { ProductCard } from "../ProductCard/ProductCard";
import { SaleCard } from "../SaleCard/SaleCard";

type itemCardType = ProductType | SaleType | ClientType;

export function ItemCard({
  item,
  type,
}: {
  item: itemCardType;
  type: "PRODUCT" | "CLIENT" | "SALE";
}) {
  const items = {
    PRODUCT: <ProductCard product={item as ProductType} />,
    SALE: <SaleCard sale={item as SaleType} />,
    CLIENT: <ClientCard client={item as ClientType} />,
  };

  return items[type];
}
