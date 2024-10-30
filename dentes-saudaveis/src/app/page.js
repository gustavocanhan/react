import styles from "./page.module.css";
import CardCliente from "./componentes/CardCliente";

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

      <section className={styles.secao_aparelho}>
        <h2>por que usar <b>aparelho?</b></h2>
        <img src="/aparelho.png"/>
        <div className={styles.container_aparelho}>
          <div>
            <h3>Alinhar os dentes</h3>
            <p>Dentes desalinhados causam problemas nos dentes e podem afetar a
            digestão dos alimentos e a respiração.</p>
          </div>
          <div>
            <h3>Melhorar a dicção e a higiene dentária</h3>
            <p>Muitas pessoas não conseguem nem usar fio dental devido à posição
              da sua dentição. Contudo, a correção possibilita o cuidado com a
              saúde bucal de forma bem mais ampla.</p>
          </div>
          <div>
            <h3>Corrigir espaço entre os dentes</h3>
            <p>Uma dentição desalinhada e com espaços significativos incomodam
              muitas pessoas. Usar aparelho nos dentes é uma das formas mais
              eficientes para que esses problemas possam ser corrigidos.</p>
          </div>
        </div>
      </section>

      <section className={styles.secao_cliente}>
        <h2>veja o que nossos <b>clientes</b> estão falando...</h2>
        <div className={styles.container_card}>
          <CardCliente imagem={'/cliente01.png'}>
            <h3>Alberto</h3>
            <p>Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado.</p>
          </CardCliente>
          

          <CardCliente imagem={'/cliente02.png'}>
          <h3>Eliana</h3>
          <p>Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado.</p>
          </CardCliente>

          <CardCliente imagem={'/cliente03.png'}>
          <h3>Carla</h3>
          <p>Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado.</p>
          </CardCliente>
        </div>
      </section>
      <section className={styles.secao_informacao}></section>
      <section className={styles.secao_localizacao}></section>
    </main>
  );
}
