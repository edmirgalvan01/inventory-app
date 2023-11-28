import { getClientById } from "../database/clients";
import { ClientType } from "../types";
import { useState, useEffect } from "react";

export function useGetClientById(id: string) {
  const [client, setClient] = useState<ClientType>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getClientById(id)
      .then(({ success, data, error }) => {
        success ? setClient(data![0] as ClientType) : setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { client, error, isLoading };
}
