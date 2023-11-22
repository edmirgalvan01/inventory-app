import "./SalesPage.css";
import { useState } from "react";
import { PrimaryButton } from "../../components/buttons/buttons";
import { ListOfSales } from "../../components/ListOfItems/ListOfItems";
import { Navbar } from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import initialSales from "../../mocks/sales.json";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export function SalesPage() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const filteredSales = initialSales.filter((sale) => {
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
            <select onChange={handleChangeCategory}>
              <option value="all">Todos</option>
              <option value="Literatura">Literatura</option>
              <option value="Hogar">Hogar</option>
            </select>
          </label>
        </div>
        <ListOfSales sales={filteredSales} />
      </section>
      <Navbar />
    </>
  );
}
