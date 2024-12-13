import styles from "@/app/componentes/Topo/Topo.module.css";
import Link from "next/link";
import FiquePorDentro from "../FiquePorDentro";

export default function Topo() {
  return (
    <header>
      <div className={styles.faixa_informacao}>
        <small>PREFEITURA DE SÃO PAULO</small>
        <small>TRANSPARÊNCIA SÃO PAULO</small>
      </div>
      <div className={styles.topo}>
        <div className={styles.faixa_topo}>
        <Link href='/' className={styles.link_pagina_inicial}><h1>INTRANET SGM</h1></Link>
        </div>
      </div>
      <div className={styles.faixa_menu}>
        <nav>
          <Link href="/paginas/Institucional">INSTITUCIONAL</Link>
          <a href="#">ADMINISTRATIVO</a>
          <a href="#">GESTÃO DE PESSOAS</a>
          <a href="#">SISTEMAS PMSP</a>
        </nav>
        <div className={styles.container_info}>
          <FiquePorDentro />
        </div>
      </div>
    </header>
  );
}
