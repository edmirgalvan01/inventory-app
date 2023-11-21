import "./NewSalePage.css";
import { FieldInput } from "../../components/Field/Field";
import { Navbar } from "../../components/Navbar/Navbar";
import { PrimaryButton } from "../../components/buttons/buttons";

export function NewSalePage() {
  return (
    <>
      <section className="newSalePage">
        <h1>Nueva venta</h1>
        <form className="newSalePage--form">
          <FieldInput
            label="Articulo"
            onChange={() => {}}
            placeholder="Aleron delantero"
          />
          <FieldInput
            type="number"
            label="Total"
            onChange={() => {}}
            placeholder="$132.4"
          />
          <FieldInput
            type="number"
            label="Cantidad vendida"
            onChange={() => {}}
            placeholder="12"
          />
          <FieldInput
            label="Cliente"
            onChange={() => {}}
            placeholder="Edmir Galvan"
          />
          <PrimaryButton onClick={() => {}}>Guardar venta</PrimaryButton>
        </form>
      </section>
      <Navbar />
    </>
  );
}
