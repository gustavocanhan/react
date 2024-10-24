'use client';
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";


export default function Home() {

  let x = 10
  let y = 20

  const [soma, setMensagem] = useState(0);

  function funcaoClick(){
    setMensagem(x + y)
  }

  return (
    <>
      <Head>
        <title>Teste de Evento</title>
        <meta name="description" content="Testar o OnClick" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>{x} + {y} = {soma}</h1>
        <button onClick={funcaoClick}>Clique aqui</button>
      </main>
    </>
  );
}
