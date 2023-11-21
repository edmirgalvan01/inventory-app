import { ListOfProducts } from "../../components/ListOfProducts/ListOfProducts";
import { Navbar } from "../../components/Navbar/Navbar";
import { PrimaryButton } from "../../components/buttons/buttons";
import "./ClientsPage.css";

export function ClientsPage() {
  return (
    <>
      <section className="clientsPage">
        <div className="clientsPage--title">
          <h1>Todas sus ventas en un solo lugar</h1>
          <small>Ultima actualización el 12/11/23 a las 15:06</small>
        </div>
        <PrimaryButton>Nuevo cliente</PrimaryButton>
        <div className="clientsPage--filters">
          <h3>Ordenar por</h3>
          <label>
            Nombre
            <input type="text" placeholder="Edmir Galvan..." />
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
