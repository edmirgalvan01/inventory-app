import { ClientsIcon, HomeIcon, InventoryIcon, SalesIcon } from "../icons";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar--item">
        <HomeIcon />
        Inicio
      </a>
      <a href="/" className="navbar--item">
        <InventoryIcon />
        Inventario
      </a>
      <a href="/" className="navbar--item">
        <SalesIcon />
        Ventas
      </a>
      <a href="/" className="navbar--item">
        <ClientsIcon />
        Clientes
      </a>
    </nav>
  );
}
