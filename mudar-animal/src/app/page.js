'use client';
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";
import imagemCachorro from "/public/cachorro.jpg";
import imagemGato from "/public/gato.jpg";


export default function Home() {

  let imagemAnimal = "";
  let informacaoAnimal = "";
  let tipoAnimal = "Cachorro";

  const [tipoDoComponenteCard, setTipodoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro"){
      setTipodoComponenteCard("gato")
    } else {
      setTipodoComponenteCard("cachorro")
    }
  };

  if (tipoDoComponenteCard === "cachorro"){
    imagemAnimal = imagemCachorro;
    informacaoAnimal = "É um mamífero carnívoro da família dos canídeos.";
    tipoAnimal = "Cachorro";
  } else {
    imagemAnimal = imagemGato;
    informacaoAnimal = "É um mamífero carnívoro da família dos felídeos."
    tipoAnimal = "Gato";
  }

  return (
    <div className={styles.container_principal}>
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={alterarState}>Mudar Animal</button>
      </header>
      <main>
        <div className={styles.card_animal}>
          <Image src={imagemAnimal} alt="animal"/>
        </div>
        <div className={styles.card_informacao}>
          <h3>Informação sobre o {tipoAnimal}</h3>
          <p>{informacaoAnimal}</p>
        </div>
      </main>
    </div>
  );
}
