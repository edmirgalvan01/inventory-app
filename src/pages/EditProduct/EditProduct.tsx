import "./EditProduct.css";
import { useParams } from "react-router-dom";
import { useGetProductById } from "../../hooks/useGetProductById";
import { PrimaryButton } from "../../components/buttons/buttons";
import { FieldInput } from "../../components/Field/Field";
import { useUpdateProduct } from "../../hooks/useUpdateProduct";
import { Navbar } from "../../components/Navbar/Navbar";
import { Toaster } from "sonner";

export function EditProduct() {
  const { productId } = useParams();
  const { product } = useGetProductById(productId!);

  const { updateNewProduct, handleSubmit } = useUpdateProduct(product!);

  return (
    <>
      <section className="editProduct containerPage">
        <h1>Edita tu producto</h1>
        <form className="editProduct--form" onSubmit={handleSubmit}>
          <FieldInput
            label="Nombre"
            placeholder={product?.name}
            onChange={(e) => updateNewProduct("name", e.target.value)}
          />
          <FieldInput
            label="Precio"
            type="number"
            placeholder={`$${product?.price.toString()}`}
            onChange={(e) => updateNewProduct("price", e.target.value)}
          />
          <FieldInput
            label="Stock"
            type="number"
            placeholder={product?.stock.toString()}
            onChange={(e) => updateNewProduct("stock", e.target.value)}
          />
          <FieldInput
            label="Categoria"
            placeholder={product?.category}
            onChange={(e) => updateNewProduct("category", e.target.value)}
          />
          <PrimaryButton>Editar producto</PrimaryButton>
        </form>
      </section>
      <Toaster richColors position="top-center" />
      <Navbar />
    </>
  );
}
