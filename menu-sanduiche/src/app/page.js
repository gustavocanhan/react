'use client';
import styles from "./page.module.css";
import { useState } from "react";
import Menu from "./componentes/Menu";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  function atualizarMenu(){
    setMenuAberto(!menuAberto);
  }

  return (
    <main className={styles.container}>
      <header className={styles.topo}>
          <button className={styles.botao} onClick={atualizarMenu}>{menuAberto ? <IoMdClose/> : <IoMenu/>}</button>
      </header>
      {menuAberto && (<Menu/>)}
    </main>
  );
}
