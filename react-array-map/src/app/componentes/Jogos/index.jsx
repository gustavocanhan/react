import styles from "@/app/componentes/Jogos/Jogos.module.css";

export default function Jogos(props) {
  return (
    <div className={styles.card}>
      <div className={props.plataforma === "xbox" ? styles.cor_xbox : styles.cor_ps}>
        <p>{props.plataforma}</p>
      </div>
      <div className={styles.card_jogo}>
        <p>{props.nome}</p>
      </div>
    </div>
  );
}
