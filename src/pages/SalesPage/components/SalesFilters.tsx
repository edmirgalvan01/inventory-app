export function SalesFilters() {
  return (
    <div className="salesPage--filters">
      <h3>Ordenar por</h3>
      <label>
        Cantidad
        <select>
          <option value="1">Mayor a menor</option>
          <option value="2">Menor a mayor</option>
        </select>
      </label>
      <label>
        Categoria
        <select>
          <option value="1">Categoria 1</option>
          <option value="2">Categoria 2</option>
        </select>
      </label>
      <label>
        Fecha
        <input type="date" />
      </label>
    </div>
  );
}
