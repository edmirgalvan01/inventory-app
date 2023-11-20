import "./InventoryPage.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { ArrowDownIcon } from "../../components/icons";

export function InventoryPage() {
  return (
    <>
      <section className="inventoryPage">
        <div className="inventoryPage--title">
          <h1>Todo su inventario en un solo lugar</h1>
          <small>Ultima actualización el 12/11/23 a las 15:06</small>
        </div>
        <button className="primaryButton">Nuevo producto</button>
        <div className="inventoryPage--filters">
          <h3>Ordenar por</h3>
          <label>
            Precio
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
            Nombre
            <input type="text" />
          </label>
        </div>
        <ul className="listOfProducts">
          <li className="productCard">
            <ArrowDownIcon />
            <p>Nombre</p>
            <small>Aleron</small>
          </li>
          <li className="productCard">
            <ArrowDownIcon />
            <p>Nombre</p>
            <small>Aleron</small>
          </li>
          <li className="productCard">
            <ArrowDownIcon />
            <p>Nombre</p>
            <small>Aleron</small>
          </li>
          <li className="productCard">
            <ArrowDownIcon />
            <p>Nombre</p>
            <small>Aleron</small>
          </li>
          <li className="productCard">
            <ArrowDownIcon />
            <p>Nombre</p>
            <small>Aleron</small>
          </li>
          <li className="productCard">
            <ArrowDownIcon />
            <p>Nombre</p>
            <small>Aleron</small>
          </li>
          <li className="productCard">
            <ArrowDownIcon />
            <p>Nombre</p>
            <small>Aleron</small>
          </li>
        </ul>
      </section>
      <Navbar />
    </>
  );
}
