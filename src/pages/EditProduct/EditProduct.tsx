import "./EditProduct.css";
import { useParams } from "react-router-dom";
import { useGetProductById } from "../../hooks/useGetProductById";

export function EditProduct() {
  const { productId } = useParams();
  const { product } = useGetProductById(productId!);

  return (
    <section className="editProduct containerPage">
      <h1>{product?.name}</h1>
    </section>
  );
}
