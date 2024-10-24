import styles from "@/componentes/Topo/Topo.module.css";
import Link from "next/link";

export default function Topo() {
  return (
    <header className={styles.topo}>
      <div>
        <img src="/logo.png"></img>
        <nav>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href='/sabores' className={styles.link}>Sabores</Link>
          <Link href="/sobre" className={styles.link}>Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
