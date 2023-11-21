export function ClientsFilters() {
  return (
    <div className="clientsPage--filters">
      <h3>Ordenar por</h3>
      <label>
        Nombre
        <input type="text" placeholder="Edmir Galvan..." />
      </label>
      <label>
        Fecha
        <input type="date" />
      </label>
    </div>
  );
}
