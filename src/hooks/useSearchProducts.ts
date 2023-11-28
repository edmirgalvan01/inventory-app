import { ProductType } from "../types";
import { useState, useEffect } from "react";

export function useSearchProducts(products: ProductType[]) {
  const [query, setQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    if (query.length < 2) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.name.includes(query))
      );
    }
  }, [products, query]);

  return { filteredProducts, updateQuery: setQuery };
}
