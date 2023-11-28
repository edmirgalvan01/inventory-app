import "./ClientsPage.css";
import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { PrimaryButton } from "../../components/buttons/buttons";
import { useNavigate } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { useGetClients } from "../../hooks/useGetClients";
import { ListOfItems } from "../../components/ListOfItems/ListOfItems";

export function ClientsPage() {
  const navigate = useNavigate();
  const { clients, error, isLoading } = useGetClients();

  const [name, setName] = useState("");

  const filteredClients = clients.filter((client) =>
    client.name.includes(name)
  );

  return (
    <>
      <section className="clientsPage containerPage">
        <PageTitle title="Todos tus clientes en un solo lugar" />
        <PrimaryButton onClick={() => navigate("/new-client")}>
          Nuevo cliente
        </PrimaryButton>
        <div className="clientsPage--filters">
          <h3>Buscar</h3>
          <label>
            Nombre
            <input
              type="text"
              placeholder="Edmir Galvan..."
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <ListOfItems
          type="client"
          items={filteredClients}
          isLoading={isLoading}
          error={error}
        />
      </section>
      <Navbar />
    </>
  );
}
