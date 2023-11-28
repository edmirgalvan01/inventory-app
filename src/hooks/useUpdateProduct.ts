import { toast } from "sonner";
import { updateProduct } from "../database/products";
import { ProductType } from "../types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useUpdateProduct(product: ProductType) {
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
  });

  const handleChangeField = (property: string, value: string) => {
    setNewProduct({ ...newProduct, [property]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const productToSubmit = {
      name: newProduct.name || product?.name,
      price: newProduct.price || product?.price,
      stock: newProduct.stock || product?.stock,
      category: newProduct.category || product?.category,
    };

    updateProduct(product.id, productToSubmit).then(({ success, error }) => {
      if (!success) {
        toast.error(error);
      } else {
        toast.success("Producto actualizado correctamente");
        setTimeout(() => {
          navigate(-1);
        }, 1500);
      }
    });
  };

  return { updateNewProduct: handleChangeField, handleSubmit };
}
