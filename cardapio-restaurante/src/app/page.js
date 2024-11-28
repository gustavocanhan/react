import styles from "./page.module.css";
import Categorias from "./componentes/Categorias";
import CampoDeBusca from "./componentes/CampoDeBusca";

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
      </main>
    </div>
  );
}
