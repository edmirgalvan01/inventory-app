import "./SalesPage.css";
import { PrimaryButton } from "../../components/buttons/buttons";
import { ListOfProducts } from "../../components/ListOfProducts/ListOfProducts";
import { Navbar } from "../../components/Navbar/Navbar";
import { SalesTitle } from "./components/SalesTitle";
import { SalesFilters } from "./components/SalesFilters";
import { useNavigate } from "react-router-dom";

export function SalesPage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="salesPage containerPage">
        <SalesTitle />
        <PrimaryButton
          onClick={() => {
            navigate("/new-sale");
          }}
        >
          Nueva venta
        </PrimaryButton>
        <SalesFilters />
        <ListOfProducts />
      </section>
      <Navbar />
    </>
  );
}
