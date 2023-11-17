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
            <h3>$12,540.32</h3>
          </article>
          <article className="homePage--cards__item">
            <span>El ultimo mes se compraron</span>
            <h3>$8,216.93</h3>
          </article>
        </div>
        <div className="homePage--info">
          <h2>Esto significa que</h2>
          <div className="homePage--info__item">
            Sus ganancias han incrementado un <span>34%</span> con respecto al
            ultimo mes
          </div>
          <div className="homePage--info__item">
            Han obtenido un total de <span>14</span>nuevos clientes
          </div>
          <div className="homePage--info__item">
            Sus ventas han tenido <span>$542.34</span> como promedio general
          </div>
          <div className="homePage--info__item">
            Han ganado un <span>13%</span> con respecto a su inversión
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
        <a href="/">Inicio</a>
        <a href="/">Inventario</a>
        <a href="/">Ventas</a>
        <a href="/">Clientes</a>
      </nav>
    </>
  );
}
