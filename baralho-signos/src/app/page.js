"use client";
import styles from "./page.module.css";
import Card from "@/componentes/Card";
import Signos from "@/Dados/SignosDados";
import { useState } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container_cards}>
        <Card
          signo={Signos[0].signo}
          elemento={Signos[0].elemento}
          dataInicio={Signos[0].dataInicio}
          dataFim={Signos[0].dataFim}
          image={Signos[0].image}
        />
        <Card
          signo={Signos[1].signo}
          elemento={Signos[1].elemento}
          dataInicio={Signos[1].dataInicio}
          dataFim={Signos[1].dataFim}
          image={Signos[1].image}
        />
        <Card
          signo={Signos[2].signo}
          elemento={Signos[2].elemento}
          dataInicio={Signos[2].dataInicio}
          dataFim={Signos[2].dataFim}
          image={Signos[2].image}
        />
        <Card
          signo={Signos[3].signo}
          elemento={Signos[3].elemento}
          dataInicio={Signos[3].dataInicio}
          dataFim={Signos[3].dataFim}
          image={Signos[3].image}
        />
        <Card
          signo={Signos[4].signo}
          elemento={Signos[4].elemento}
          dataInicio={Signos[4].dataInicio}
          dataFim={Signos[4].dataFim}
          image={Signos[4].image}
        />
        <Card
          signo={Signos[5].signo}
          elemento={Signos[5].elemento}
          dataInicio={Signos[5].dataInicio}
          dataFim={Signos[5].dataFim}
          image={Signos[5].image}
        />
        <Card
          signo={Signos[6].signo}
          elemento={Signos[6].elemento}
          dataInicio={Signos[6].dataInicio}
          dataFim={Signos[6].dataFim}
          image={Signos[6].image}
        />
        <Card
          signo={Signos[7].signo}
          elemento={Signos[7].elemento}
          dataInicio={Signos[7].dataInicio}
          dataFim={Signos[7].dataFim}
          image={Signos[7].image}
        />
        <Card
          signo={Signos[8].signo}
          elemento={Signos[8].elemento}
          dataInicio={Signos[8].dataInicio}
          dataFim={Signos[8].dataFim}
          image={Signos[8].image}
        />
        <Card
          signo={Signos[9].signo}
          elemento={Signos[9].elemento}
          dataInicio={Signos[9].dataInicio}
          dataFim={Signos[9].dataFim}
          image={Signos[9].image}
        />
        <Card
          signo={Signos[10].signo}
          elemento={Signos[10].elemento}
          dataInicio={Signos[10].dataInicio}
          dataFim={Signos[10].dataFim}
          image={Signos[10].image}
        />
        <Card
          signo={Signos[11].signo}
          elemento={Signos[11].elemento}
          dataInicio={Signos[11].dataInicio}
          dataFim={Signos[11].dataFim}
          image={Signos[11].image}
        />
      </section>
    </main>
  );
}
