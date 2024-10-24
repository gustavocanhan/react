import styles from "@/componentes/SecaoCapa/Capa.module.css";

export default function Capa() {
  return (
    <section className={styles.secao}>
      <div className={styles.container}>
        <div>
          <p>Preços baixos em</p>
          <h1>Óculos de grau e de sol</h1>
          <p>Você só encontra aqui</p>
        </div>
      </div>
    </section>
  );
}
