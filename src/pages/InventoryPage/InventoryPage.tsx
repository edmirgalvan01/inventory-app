import "./InventoryPage.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { ListOfItems } from "../../components/ListOfItems/ListOfItems";
import { PrimaryButton } from "../../components/buttons/buttons";
import { useNavigate } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { useGetProducts } from "../../hooks/useGetProducts";
import { useSearchProducts } from "../../hooks/useSearchProducts";

export function InventoryPage() {
  const navigate = useNavigate();
  const { products, error, isLoading } = useGetProducts();
  const { filteredProducts, updateQuery } = useSearchProducts(products);

  return (
    <>
      <section className="inventoryPage containerPage">
        <PageTitle title="Todo su inventario en un solo lugar" />
        <PrimaryButton onClick={() => navigate("/new-product")}>
          Nuevo producto
        </PrimaryButton>
        <div className="inventoryPage--filters">
          <h3>Buscar por nombre</h3>
          <input
            type="text"
            placeholder="Pintura azul..."
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
        <ListOfItems
          type="product"
          items={filteredProducts}
          isLoading={isLoading}
          error={error}
        />
      </section>
      <Navbar />
    </>
  );
}
