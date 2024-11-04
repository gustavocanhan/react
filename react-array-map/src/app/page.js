"use client";
import styles from "./page.module.css";
import Jogos from "./componentes/Jogos";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";
import { filtrarJogo, buscarJogo, retornarJogos } from "./servicos";

export default function Home() {
  const [listaJogos, setListaJogos] = useState(retornarJogos);
  const [textoBusca, setTextoBusca] = useState("");

  const handleFiltrarJogoPlataforma = (plataforma) => {
    setListaJogos(filtrarJogo(plataforma));
    setTextoBusca("");
  };

  const handleLimparFiltro = () => {
    setListaJogos(retornarJogos());
    setTextoBusca("");
  };

  const handleBuscarJogo = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    setListaJogos(buscarJogo(textoDigitado));
  };

  return (
    <div className={styles.container}>
      <h1>Lista de Jogos Exclusivos</h1>

      <div className={styles.filtro}>
        <div className={styles.botoes}>
          <button
            className={styles.botao_xbox}
            onClick={() => handleFiltrarJogoPlataforma("xbox")}
          >
            Xbox
          </button>
          <button
            className={styles.botao_ps}
            onClick={() => handleFiltrarJogoPlataforma("playstation")}
          >
            Playstation
          </button>
        </div>
        <div className={styles.limpar}>
          <button onClick={() => handleLimparFiltro()}>Limpar</button>
        </div>
      </div>

      <div className={styles.campo_busca}>
        <span>
          <HiMiniMagnifyingGlass />
        </span>
        <input
          type="text"
          value={textoBusca}
          onChange={(event) => handleBuscarJogo(event.target.value)}
          placeholder=" Pesquise um jogo ou plataforma"
        />
      </div>

      <div>
        {listaJogos.map((jogo, index) => (
          <Jogos key={index} plataforma={jogo.plataforma} nome={jogo.nome} />
        ))}
      </div>
    </div>
  );
}
