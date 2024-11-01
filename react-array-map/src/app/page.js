import styles from "./page.module.css";
import Jogos from "./componentes/Jogos";
import { jogosExclusivos } from "./dados";

export default function Home() {
  return (
    <div className={styles.container}>
      {jogosExclusivos.map((jogo, index) => (
        <Jogos plataforma={jogo.plataforma} nome={jogo.nome} />
        
      ))}
    </div>
  );
}
