import "./SalesPage.css";
import { PrimaryButton } from "../../components/buttons/buttons";
import { ListOfProducts } from "../../components/ListOfProducts/ListOfProducts";
import { Navbar } from "../../components/Navbar/Navbar";
import { SalesTitle } from "./components/SalesTitle";
import { SalesFilters } from "./components/SalesFilters";

export function SalesPage() {
  return (
    <>
      <section className="salesPage">
        <SalesTitle />
        <PrimaryButton>Nueva venta</PrimaryButton>
        <SalesFilters />
        <ListOfProducts />
      </section>
      <Navbar />
    </>
  );
}
