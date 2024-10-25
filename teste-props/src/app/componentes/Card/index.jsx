import styles from "@/app/componentes/Card/Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.card_imagem}>
        <img src={props.imagem}></img>
      </div>
      <div className={styles.card_descricao}>
        <h3>{props.nome}</h3>
        <p>R&#36; {props.preco}</p>
        <small>{props.categoria}</small>
        <button>Adicionar</button>
      </div>
    </div>
  );
}
