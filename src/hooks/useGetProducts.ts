import { useState, useEffect } from "react";
import { ProductType } from "../types";
import { getProducts } from "../database/products";

export function useGetProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts()
      .then(({ success, data, error }) => {
        success ? setProducts(data as ProductType[]) : setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { products, error, isLoading };
}
