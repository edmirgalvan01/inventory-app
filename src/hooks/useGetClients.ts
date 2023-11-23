import { useState, useEffect } from "react";
import { ClientType } from "../types";
import { getClients } from "../database/clients";

export function useGetClients() {
  const [clients, setClients] = useState<ClientType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getClients()
      .then(({ success, data, error }) => {
        success ? setClients(data as ClientType[]) : setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { clients, error, isLoading };
}
