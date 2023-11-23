import { useState, useEffect } from "react";
import { SaleType } from "../types";
import { getSales } from "../database/sales";

export function useGetSales() {
  const [sales, setSales] = useState<SaleType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getSales()
      .then(({ success, data, error }) => {
        success ? setSales(data as SaleType[]) : setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { sales, error, isLoading };
}
