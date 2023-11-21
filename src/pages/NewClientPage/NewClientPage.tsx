import "./NewClientPage.css";
import { FieldInput } from "../../components/Field/Field";
import { Navbar } from "../../components/Navbar/Navbar";
import { PrimaryButton } from "../../components/buttons/buttons";

export function NewClientPage() {
  return (
    <>
      <section className="newClientPage containerPage">
        <h1>Nuevo cliente</h1>
        <form className="newClientPage--form">
          <FieldInput
            label="Nombre"
            onChange={() => {}}
            placeholder="Edmir Galvan"
          />
          <FieldInput
            label="Direccion"
            onChange={() => {}}
            placeholder="Calle 12 de octubre #106 col. Francisco Sarabia"
          />
          <FieldInput
            type="number"
            label="Numero de telefono"
            onChange={() => {}}
            placeholder="7828869842"
          />
          <PrimaryButton onClick={() => {}}>Guardar cliente</PrimaryButton>
        </form>
      </section>
      <Navbar />
    </>
  );
}
