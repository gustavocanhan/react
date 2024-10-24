import styles from "@/componentes/Topo/Topo.module.css";
import Link from "next/link";

export default function Topo() {
  return (
    <header className={styles.container_topo}>
      <h1>Navegação React</h1>
      <nav>
        <Link href="/frontend" className={styles.link_frontend}>Front-end</Link>
        <Link href="/backend" className={styles.link_backend}>Back-end</Link>
        <Link href="/mobile" className={styles.link_mobile}>Mobile</Link>
      </nav>
    </header>
  );
}
