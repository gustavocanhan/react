"use client";
import styles from "./page.module.css";
import { useState } from "react";
// Icone Lua
import { FaRegMoon } from "react-icons/fa";
// Icone Sol
import { MdOutlineWbSunny } from "react-icons/md";

export default function Home() {
  const lua = <FaRegMoon />;
  const sol = <MdOutlineWbSunny />;

  const [alterarTema, setAlterarTema] = useState(false)

  function trocarTemaPagina(){
    setAlterarTema(!alterarTema)
  }

  return (
    <div className={alterarTema ? styles.dark_mode : styles.ligth_mode}>
      <header className={styles.topo}>
        <div>
          <h2>Coffe Shop</h2>
          <button onClick={trocarTemaPagina}>{alterarTema ? sol : lua}</button>
        </div>
      </header>
      <main className={styles.main}>
        <div>
          <h1>A melhor cafeteria do Brasil</h1>
          <p>
            Venha conhecer a melhor cafeteria do Brasil! Localizada no coração
            de São Paulo, oferecemos cafés artesanais de alta qualidade e um
            ambiente acolhedor. Desfrute de nossas bebidas exclusivas e
            deliciosos acompanhamentos enquanto relaxa em um espaço único.
            Esperamos por você para uma experiência inesquecível!
          </p>
          <button>Nossas Lojas</button>
        </div>
      </main>
    </div>
  );
}
