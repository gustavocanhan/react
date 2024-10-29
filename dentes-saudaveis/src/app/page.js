import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.secao_destaque}>
        <h2>os melhores <b>aparelhos dentários</b>!</h2>
        <p>Confira abaixo todas as especialidades odontológicas que temos à sua disposicão!</p>
        <div className={styles.especialidade}>
        <div><img src="/dente.png"/><p>Pré-avaliação</p></div>
        <div><img src="/dente.png"/><p>Aparelhos Dentários</p></div>
        </div>
        <div className={styles.especialidade}> 
        <div><img src="/dente.png"/><p>Raio-X digital</p></div>
        <div><img src="/dente.png"/><p>Clareamento dental</p></div>
        </div>
        
      </section>
      <section className={styles.secao_aparelho}></section>
      <section className={styles.secao_cliente}></section>
      <section className={styles.secao_informacao}></section>
      <section className={styles.secao_localizacao}></section>
    </main>
  );
}
