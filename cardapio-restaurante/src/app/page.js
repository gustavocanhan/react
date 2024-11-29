import styles from "./page.module.css";
import Categorias from "./componentes/Categorias";
import CampoDeBusca from "./componentes/CampoDeBusca";
import Cards from "./componentes/Cards";

export default function Home() {
  return (
    <div className={styles.pagina}>
      <header className={styles.topo}>
        <div>
          <h1>RESTAURANT</h1>
          <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
        </div>
      </header>
      <main className={styles.main}>
        <Categorias/>
        <CampoDeBusca/>
        <h2>Cardápio</h2>
        <div className={styles.container_cards}>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
      </main>
    </div>
  );
}
