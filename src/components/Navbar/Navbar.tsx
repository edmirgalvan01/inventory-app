import "./Navbar.css";
import { ClientsIcon, HomeIcon, InventoryIcon, SalesIcon } from "../icons";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar--item">
        <HomeIcon />
        Inicio
      </Link>
      <Link to="/inventory" className="navbar--item">
        <InventoryIcon />
        Inventario
      </Link>
      <Link to="/sales" className="navbar--item">
        <SalesIcon />
        Ventas
      </Link>
      <Link to="/" className="navbar--item">
        <ClientsIcon />
        Clientes
      </Link>
    </nav>
  );
}
