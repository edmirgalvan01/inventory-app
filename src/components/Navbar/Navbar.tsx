import "./Navbar.css";
import { ClientsIcon, HomeIcon, InventoryIcon, SalesIcon } from "../icons";
import { Link } from "react-router-dom";
import { PATHNAMES } from "../../consts";

export function Navbar() {
  const getItemClassName = (pathname: string) => {
    return window.location.pathname === pathname
      ? "navbar--item active"
      : "navbar--item";
  };

  return (
    <nav className="navbar">
      <Link to="/" className={getItemClassName(PATHNAMES.home)}>
        <HomeIcon />
        Inicio
      </Link>
      <Link to="/inventory" className={getItemClassName(PATHNAMES.inventory)}>
        <InventoryIcon />
        Inventario
      </Link>
      <Link to="/sales" className={getItemClassName(PATHNAMES.sales)}>
        <SalesIcon />
        Ventas
      </Link>
      <Link to="/clients" className={getItemClassName(PATHNAMES.clients)}>
        <ClientsIcon />
        Clientes
      </Link>
    </nav>
  );
}
