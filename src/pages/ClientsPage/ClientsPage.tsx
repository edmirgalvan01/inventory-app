import "./ClientsPage.css";
import { ListOfProducts } from "../../components/ListOfProducts/ListOfProducts";
import { Navbar } from "../../components/Navbar/Navbar";
import { PrimaryButton } from "../../components/buttons/buttons";
import { ClientsTitle } from "./components/ClientsTitle";
import { ClientsFilters } from "./components/ClientsFilters";

export function ClientsPage() {
  return (
    <>
      <section className="clientsPage">
        <ClientsTitle />
        <PrimaryButton>Nuevo cliente</PrimaryButton>
        <ClientsFilters />
        <ListOfProducts />
      </section>
      <Navbar />
    </>
  );
}
