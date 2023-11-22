import "./SalesPage.css";
import { PrimaryButton } from "../../components/buttons/buttons";
import { ListOfSales } from "../../components/ListOfItems/ListOfItems";
import { Navbar } from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import initialSales from "../../mocks/sales.json";

export function SalesPage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="salesPage containerPage">
        <div className="salesPage--title">
          <h1>Todas sus ventas en un solo lugar</h1>
          <small>Ultima actualización el 12/11/23 a las 15:06</small>
        </div>
        <PrimaryButton onClick={() => navigate("/new-sale")}>
          Nueva venta
        </PrimaryButton>
        <div className="salesPage--filters">
          <h3>Buscar</h3>
          <label>
            Categoria
            <select>
              <option value="1">Categoria 1</option>
              <option value="2">Categoria 2</option>
            </select>
          </label>
          <label>
            Fecha
            <input type="date" />
          </label>
        </div>
        <ListOfSales sales={initialSales} />
      </section>
      <Navbar />
    </>
  );
}
