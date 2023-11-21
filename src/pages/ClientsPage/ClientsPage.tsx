import "./ClientsPage.css";
import { ListOfProducts } from "../../components/ListOfProducts/ListOfProducts";
import { Navbar } from "../../components/Navbar/Navbar";
import { PrimaryButton } from "../../components/buttons/buttons";
import { ClientsTitle } from "./components/ClientsTitle";
import { ClientsFilters } from "./components/ClientsFilters";
import { useNavigate } from "react-router-dom";

export function ClientsPage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="clientsPage">
        <ClientsTitle />
        <PrimaryButton onClick={() => navigate("/new-client")}>
          Nuevo cliente
        </PrimaryButton>
        <ClientsFilters />
        <ListOfProducts />
      </section>
      <Navbar />
    </>
  );
}
