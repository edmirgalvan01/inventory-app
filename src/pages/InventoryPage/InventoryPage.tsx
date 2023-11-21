import "./InventoryPage.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { InventoryTitle } from "./components/InventoryTitle";
import { InventoryFilters } from "./components/InventoryFilters";
import { ListOfProducts } from "../../components/ListOfProducts/ListOfProducts";
import { PrimaryButton } from "../../components/buttons/buttons";
import { useNavigate } from "react-router-dom";

export function InventoryPage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="inventoryPage containerPage">
        <InventoryTitle />
        <PrimaryButton onClick={() => navigate("/new-product")}>
          Nuevo producto
        </PrimaryButton>
        <InventoryFilters />
        <ListOfProducts />
      </section>
      <Navbar />
    </>
  );
}
