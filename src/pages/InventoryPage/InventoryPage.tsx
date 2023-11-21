import "./InventoryPage.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { InventoryTitle } from "./components/InventoryTitle";
import { InventoryFilters } from "./components/InventoryFilters";
import { ListOfProducts } from "../../components/ListOfProducts/ListOfProducts";
import { PrimaryButton } from "../../components/buttons/buttons";

export function InventoryPage() {
  return (
    <>
      <section className="inventoryPage">
        <InventoryTitle />
        <PrimaryButton>Nuevo producto</PrimaryButton>
        <InventoryFilters />
        <ListOfProducts />
      </section>
      <Navbar />
    </>
  );
}
