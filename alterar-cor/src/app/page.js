"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const corDeFundoVermelho = styles.bg_vermelho
  const corDeFundoAzul = styles.bg_azul

  const [corAlterada, setCorAlterada] = useState(false)
  const [corDeFundo, setCorDeFundo] = useState(corDeFundoVermelho)

  function alterarEstilo(){
    setCorAlterada(!corAlterada);
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Alterando o estilo do elemento</h2>
        <div className={corAlterada ? corDeFundoAzul : corDeFundoVermelho}></div>
        <p>Clique no botão para alterar o estilo do elemento acima</p>
        <button onClick={alterarEstilo}>Alterar</button>
      </div>
    </main>
  );
}
