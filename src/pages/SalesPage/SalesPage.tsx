import "./SalesPage.css";
import { PrimaryButton } from "../../components/buttons/buttons";
import { ListOfProducts } from "../../components/ListOfProducts/ListOfProducts";
import { Navbar } from "../../components/Navbar/Navbar";

export function SalesPage() {
  return (
    <>
      <section className="salesPage">
        <div className="salesPage--title">
          <h1>Todas sus ventas en un solo lugar</h1>
          <small>Ultima actualización el 12/11/23 a las 15:06</small>
        </div>
        <PrimaryButton>Nueva venta</PrimaryButton>
        <div className="salesPage--filters">
          <h3>Ordenar por</h3>
          <label>
            Cantidad
            <select>
              <option value="1">Mayor a menor</option>
              <option value="2">Menor a mayor</option>
            </select>
          </label>
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
        <ListOfProducts />
      </section>
      <Navbar />
    </>
  );
}
