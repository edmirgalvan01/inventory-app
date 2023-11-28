import { getProductById } from "../database/products";
import { ProductType } from "../types";
import { useState, useEffect } from "react";

export function useGetProductById(id: string) {
  const [product, setProduct] = useState<ProductType>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProductById(id)
      .then(({ success, data, error }) => {
        console.log({ data });

        success ? setProduct(data![0] as ProductType) : setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { product, error, isLoading };
}
