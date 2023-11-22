import "./InventoryPage.css";
import initialProducts from "../../mocks/products.json";
import { Navbar } from "../../components/Navbar/Navbar";
import { ListOfProducts } from "../../components/ListOfItems/ListOfItems";
import { PrimaryButton } from "../../components/buttons/buttons";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export function InventoryPage() {
  const navigate = useNavigate();

  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: "all",
  });

  const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      category: e.target.value,
    });
  };

  const handleChangeMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const fixedValue = parseInt(e.target.value);

    setFilters({
      ...filters,
      minPrice: fixedValue,
    });
  };

  const filterProducts = (
    products: Array<{
      id: number;
      name: string;
      price: number;
      category: string;
      stock: number;
    }>
  ) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

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
            <select onChange={handleChangeCategory}>
              <option value="all">Todas</option>
              <option value="Literatura">Categoria 1</option>
              <option value="Hogar">Categoria 2</option>
            </select>
          </label>
          <label>
            Precio minimo
            <input
              type="range"
              min={0}
              max={15000}
              onChange={handleChangeMinPrice}
            />
            <small>${filters.minPrice}</small>
          </label>
        </div>
        <ListOfProducts products={filterProducts(products)} />
      </section>
      <Navbar />
    </>
  );
}
