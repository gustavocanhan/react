import styles from "@/app/componentes/Topo/Topo.module.css";
import Image from "next/image";
import Logo from "/public/logo.png";
import Sol from "/public/sun.png";
import Lua from "/public/moon.png";

export default function Topo(props) {
  return (
    <header className={props.alterarTema ? styles.dark_mode : styles.light_mode}>
      <div className={styles.topo}>
        <Image src={Logo} alt="Logo" className={styles.logo} />
        <button onClick={props.trocarTemaPagina}>
          <Image src={props.alterarTema ? Sol : Lua} alt="Tema" />
        </button>
      </div>
    </header>
  );
}
