"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";
import CardAnimal from "./componentes/CardAnimal";
import CardInformacoes from "./componentes/CardInformacoes";
import Topo from "./componentes/Topo";

export default function Home() {
  const [tipoDoComponenteCard, setTipodoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipodoComponenteCard("gato");
    } else {
      setTipodoComponenteCard("cachorro");
    }
  };

  return (
    <div className={styles.container_principal}>
      <Topo alterarState={alterarState} />
      <main>
        <CardAnimal tipoAnimal={tipoDoComponenteCard} />
        <CardInformacoes tipoAnimal={tipoDoComponenteCard} />
      </main>
    </div>
  );
}
