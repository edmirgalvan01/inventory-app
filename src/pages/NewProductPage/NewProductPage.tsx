import { FieldInput } from "../../components/Field/Field";
import { Navbar } from "../../components/Navbar/Navbar";
import { PrimaryButton } from "../../components/buttons/buttons";
import "./NewProductPage.css";

export function NewProductPage() {
  return (
    <>
      <section className="newProductPage containerPage">
        <h1>Nuevo producto</h1>
        <form className="newProductPage--form">
          <FieldInput
            label="Nombre"
            onChange={() => {}}
            placeholder="Aleron delantero"
          />
          <FieldInput label="Unidad" onChange={() => {}} placeholder="Piezas" />
          <FieldInput
            type="number"
            label="Precio por unidad"
            onChange={() => {}}
            placeholder="12.32"
          />
          <FieldInput
            label="Categoria"
            onChange={() => {}}
            placeholder="Automoviles"
          />
          <FieldInput
            type="number"
            label="Cantida recibida"
            onChange={() => {}}
            placeholder="120"
          />
          <PrimaryButton onClick={() => {}}>Guardar producto</PrimaryButton>
        </form>
      </section>
      <Navbar />
    </>
  );
}
