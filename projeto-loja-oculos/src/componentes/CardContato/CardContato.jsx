import styles from "@/componentes/CardContato/CardContato.module.css";

export default function CardContato() {
  return (
    <div className={styles.container} id="sobre">
      <div className={styles.card}>
        <img src="/loja.png" />
      </div>
      <div className={styles.card}>
        <h2>nossas filiais</h2>
        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
      </div>
      <div className={styles.card}>
        <h2>atendimento flexivel</h2>
        <p>Nossa equipe é treindada para te atender</p>
      </div>
      <div className={styles.card}>
        <img src="/atendimento.png" />
      </div>
    </div>
  );
}
