import { PrimaryButton } from "../../components/buttons/buttons";
import "./NewProductPage.css";

export function NewProductPage() {
  return (
    <section className="newProductPage">
      <h1>Nuevo producto</h1>
      <form className="newProductPage--form">
        <label className="field">
          Nombre
          <input type="text" placeholder="Aleron delantero" />
        </label>
        <label className="field">
          Unidad
          <input type="text" placeholder="Piezas" />
        </label>
        <label className="field">
          Precio por unidad
          <input type="number" placeholder="12.32" />
        </label>
        <label className="field">
          Categoria
          <input type="number" placeholder="Automoviles" />
        </label>
        <label className="field">
          Cantidad recibida
          <input type="number" placeholder="230" />
        </label>
        <PrimaryButton>Guardar producto</PrimaryButton>
      </form>
    </section>
  );
}
