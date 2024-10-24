"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [numero, setNumero] = useState(0);

  function gerarNumeroAleatorio(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function exibirNumeroAleatorio() {
    setNumero(gerarNumeroAleatorio());
  }

  function limparExibicao(){
    setNumero(0)
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1>Número Aleatório</h1>
        <h2>{numero}</h2>
        <p>Click no botão abaixo para gerar um número aleatório</p>
        <div className={styles.grupoBotoes}>
          <button onClick={exibirNumeroAleatorio}>Gerar número</button>
          <button onClick={limparExibicao}>Limpar</button>
        </div>
      </div>
    </main>
  );
}
