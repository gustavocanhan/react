"use client";
import styles from "./page.module.css";
import { FaRegMoon } from "react-icons/fa"; // Icone Lua
import { MdOutlineWbSunny } from "react-icons/md"; // Icone Sol
import { useState } from "react";

export default function Home() {
  const sol = <MdOutlineWbSunny />;
  const lua = <FaRegMoon />;

  const ModoClaro = styles.light_mode;
  const ModoEscuro = styles.dark_mode;


  const [alterarTema, setAlterarTema] = useState(false);

  function MudarTema() {
    setAlterarTema(!alterarTema);
  }

  return (
    <div className={alterarTema ? ModoEscuro : ModoClaro}>
      <header className={styles.topo}>
        <div>
          <img src="/barbearia.png"></img>
          <button onClick={MudarTema}>{alterarTema ? sol : lua}</button>
        </div>
      </header>
      <main>
        <section className={styles.secao_banner}></section>
        <section className={styles.secao_conteudo}>
          <div>
            <h1>Bem-vindo a Barber Shop</h1>
            <p>
              Nossa barbearia sempre oferece profissionais de qualidade e
              estamos prontos para lidar com suas maiores expectativas.
            </p>
            <p>
              Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos
              uma equipe premiada que demonstrou o talento de mestres barbeiros
              em vários concursos de estilo. Deixe nosso barbeiro ser seu
              estilista pessoal e você nunca ficará desapontado.
            </p>
            <span className={styles.assinatura}>S.Kelly</span>
          </div>
        </section>
      </main>
    </div>
  );
}
