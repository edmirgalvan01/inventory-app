import "./ClientsPage.css";
import { useState, ChangeEvent } from "react";
import { ListOfClients } from "../../components/ListOfItems/ListOfItems";
import { Navbar } from "../../components/Navbar/Navbar";
import { PrimaryButton } from "../../components/buttons/buttons";
import { useNavigate } from "react-router-dom";
import initialClients from "../../mocks/clients.json";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export function ClientsPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const filteredClients = initialClients.filter((client) =>
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
              onChange={handleChangeName}
            />
          </label>
        </div>
        <ListOfClients clients={filteredClients} />
      </section>
      <Navbar />
    </>
  );
}
