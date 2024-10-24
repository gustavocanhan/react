import styles from "@/componentes/CardProduto/CardProduto.module.css";

export default function CardProduto() {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <h4>Óculos de grau</h4>
            <img src="/oculos01.png" />
            <p>R$ 500,00</p>
        </div>
        <div className={styles.card}>
            <h4>Óculos transition</h4>
            <img src="/oculos02.png" />
            <p>R$ 750,00</p>
        </div>
        <div className={styles.card}>
            <h4>Óculos de sol</h4>
            <img src="/oculos03.png" />
            <p>R$ 700,00</p>
        </div>
        <div className={styles.card}>
            <h4>Óculos infantil</h4>
            <img src="/oculos04.png" />
            <p>R$ 500,00</p>
        </div>
    </div>
  );
}
