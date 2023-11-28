import { getSaleById } from "../database/sales";
import { SaleType } from "../types";
import { useState, useEffect } from "react";

export function useGetSaleById(id: string) {
  const [sale, setSale] = useState<SaleType>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getSaleById(id)
      .then(({ success, data, error }) => {
        success ? setSale(data![0] as SaleType) : setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { sale, error, isLoading };
}
