'use client';
import styles from "./page.module.css";
import { useState } from "react";
import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Rodape from "./componentes/Rodape";

export default function Home() {
  const [alterarTema, setAlterarTema] = useState(false)

  function trocarTemaPagina(){
    setAlterarTema(!alterarTema)
  }

  return (
    <div>
      <Topo  trocarTemaPagina={trocarTemaPagina} alterarTema={alterarTema} />
      <SecaoBanner/>
      <SecaoExperienciaTrabalho alterarTema={alterarTema} />
    </div>
  );
}
