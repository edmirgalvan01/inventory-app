import "./SalesPage.css";
import { useState } from "react";
import { PrimaryButton } from "../../components/buttons/buttons";
import { ListOfItems } from "../../components/ListOfItems/ListOfItems";
import { Navbar } from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { useGetSales } from "../../hooks/useGetSales";

export function SalesPage() {
  const navigate = useNavigate();

  const { sales, error, isLoading } = useGetSales();

  const [category, setCategory] = useState("all");

  const filteredSales = sales.filter((sale) => {
    return category === "all" || sale.category === category;
  });

  return (
    <>
      <section className="salesPage containerPage">
        <PageTitle title="Todas tus ventas en un solo lugar" />
        <PrimaryButton onClick={() => navigate("/new-sale")}>
          Nueva venta
        </PrimaryButton>
        <div className="salesPage--filters">
          <h3>Buscar</h3>
          <label>
            Categoria
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="all">Todos</option>
              <option value="Pintura">Pintura</option>
              <option value="Herramienta">Herramienta</option>
            </select>
          </label>
        </div>
        <ListOfItems
          type="SALES"
          items={filteredSales}
          isLoading={isLoading}
          error={error}
        />
      </section>
      <Navbar />
    </>
  );
}
