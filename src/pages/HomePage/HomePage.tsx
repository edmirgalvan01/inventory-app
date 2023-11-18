import {
  ClientsIcon,
  HomeIcon,
  InventoryIcon,
  ReportIcon,
  SalesIcon,
  TrendingIcon,
  TrophyIcon,
  UserIcon,
} from "../../components/icons";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <section className="homePage">
        <div className="homePage--title">
          <h1>Hola Jair,</h1>
          <span>este es el resumen de su negocio</span>
          <small>Ultima actualizacion el 12/11/2023 a las 15:06</small>
        </div>
        <div className="homePage--cards">
          <article className="homePage--cards__item">
            <span>El ultimo mes se vendieron</span>
            <h4>$12,540.32</h4>
          </article>
          <article className="homePage--cards__item">
            <span>El ultimo mes se compraron</span>
            <h4>$8,216.93</h4>
          </article>
        </div>
        <div className="homePage--info">
          <h3>Esto significa que</h3>
          <div className="homePage--info__item">
            <TrendingIcon />
            <p>
              Sus ganancias han incrementado un <span>34%</span> con respecto al
              ultimo mes
            </p>
          </div>
          <div className="homePage--info__item">
            <UserIcon />
            <p>
              Han obtenido un total de <span>14</span> nuevos clientes
            </p>
          </div>
          <div className="homePage--info__item">
            <ReportIcon />
            <p>
              Sus ventas han tenido <span>$542.34</span> como promedio general
            </p>
          </div>
          <div className="homePage--info__item">
            <TrophyIcon />
            <p>
              Han ganado un <span>13%</span> con respecto a su inversión
            </p>
          </div>
        </div>
        <div className="homePage--rewards">
          <div className="homePage--rewards__item">
            <h4>Aleron delantero</h4>
            <span>Articulo mas vendido</span>
          </div>
          <div className="homePage--rewards__item">
            <h4>3,232.3</h4>
            <span>Mejor venta registrada</span>
          </div>
        </div>
      </section>

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
    </>
  );
}
