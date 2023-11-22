import "./ClientsPage.css";
import { ListOfClients } from "../../components/ListOfItems/ListOfItems";
import { Navbar } from "../../components/Navbar/Navbar";
import { PrimaryButton } from "../../components/buttons/buttons";
import { ClientsTitle } from "./components/ClientsTitle";
import { ClientsFilters } from "./components/ClientsFilters";
import { useNavigate } from "react-router-dom";
import initialClients from "../../mocks/clients.json";

export function ClientsPage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="clientsPage containerPage">
        <ClientsTitle />
        <PrimaryButton onClick={() => navigate("/new-client")}>
          Nuevo cliente
        </PrimaryButton>
        <ClientsFilters />
        <ListOfClients clients={initialClients} />
      </section>
      <Navbar />
    </>
  );
}
