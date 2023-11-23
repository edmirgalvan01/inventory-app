import "./InventoryPage.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { ListOfItems } from "../../components/ListOfItems/ListOfItems";
import { PrimaryButton } from "../../components/buttons/buttons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { useGetProducts } from "../../hooks/useGetProducts";

export function InventoryPage() {
  const navigate = useNavigate();

  const { products, error, isLoading } = useGetProducts();
  const [category, setCategory] = useState("all");

  const filterProducts = products.filter((product) => {
    return category === "all" || product.category === category;
  });

  return (
    <>
      <section className="inventoryPage containerPage">
        <PageTitle title="Todo su inventario en un solo lugar" />
        <PrimaryButton onClick={() => navigate("/new-product")}>
          Nuevo producto
        </PrimaryButton>
        <div className="inventoryPage--filters">
          <h3>Ordenar por</h3>
          <label>
            Categoria
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="all">Todas</option>
              <option value="Pintura">Pintura</option>
              <option value="Herramienta">Herramienta</option>
            </select>
          </label>
        </div>
        <ListOfItems
          type="PRODUCTS"
          items={filterProducts}
          isLoading={isLoading}
          error={error}
        />
      </section>
      <Navbar />
    </>
  );
}
