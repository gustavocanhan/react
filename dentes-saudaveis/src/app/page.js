import styles from "./page.module.css";
import CardCliente from "./componentes/CardCliente";
import CardInformacao from "./componentes/CardInformacao";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.secao_destaque}>
        <h2>
          os melhores <b>aparelhos dentários</b>!
        </h2>
        <p>
          Confira abaixo todas as especialidades odontológicas que temos à sua
          disposicão!
        </p>
        <div className={styles.especialidade}>
          <div>
            <img src="/dente.png" />
            <p>Pré-avaliação</p>
          </div>
          <div>
            <img src="/dente.png" />
            <p>Aparelhos Dentários</p>
          </div>
        </div>
        <div className={styles.especialidade}>
          <div>
            <img src="/dente.png" />
            <p>Raio-X digital</p>
          </div>
          <div>
            <img src="/dente.png" />
            <p>Clareamento dental</p>
          </div>
        </div>
      </section>

      <section className={styles.secao_aparelho}>
        <h2>
          por que usar <b>aparelho?</b>
        </h2>
        <img src="/aparelho.png" />
        <div className={styles.container_aparelho}>
          <div>
            <h3>Alinhar os dentes</h3>
            <p>
              Dentes desalinhados causam problemas nos dentes e podem afetar a
              digestão dos alimentos e a respiração.
            </p>
          </div>
          <div>
            <h3>Melhorar a dicção e a higiene dentária</h3>
            <p>
              Muitas pessoas não conseguem nem usar fio dental devido à posição
              da sua dentição. Contudo, a correção possibilita o cuidado com a
              saúde bucal de forma bem mais ampla.
            </p>
          </div>
          <div>
            <h3>Corrigir espaço entre os dentes</h3>
            <p>
              Uma dentição desalinhada e com espaços significativos incomodam
              muitas pessoas. Usar aparelho nos dentes é uma das formas mais
              eficientes para que esses problemas possam ser corrigidos.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.secao_cliente}>
        <h2>
          veja o que nossos <b>clientes</b> estão falando...
        </h2>
        <div className={styles.container_card}>
          <CardCliente imagem={"/cliente01.png"}>
            <h3>Alberto</h3>
            <p>
              Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me
              atendeu com profissionalismo e cuidado.
            </p>
          </CardCliente>

          <CardCliente imagem={"/cliente02.png"}>
            <h3>Eliana</h3>
            <p>
              Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me
              atendeu com profissionalismo e cuidado.
            </p>
          </CardCliente>

          <CardCliente imagem={"/cliente03.png"}>
            <h3>Carla</h3>
            <p>
              Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me
              atendeu com profissionalismo e cuidado.
            </p>
          </CardCliente>
        </div>
      </section>

      <section className={styles.secao_informacao}>
        <div className={styles.container_card}>
          <CardInformacao>
            <ul>
              <li>Segunda - 09:00 às 18:00</li>
              <li>Terça - 09:00 às 18:00</li>
              <li>Quarta - 09:00 às 18:00</li>
              <li>Quinta - 09:00 às 18:00</li>
              <li>Sexta - 09:00 às 18:00</li>
              <li>Sábado - 09:00 às 12:00</li>
            </ul>
          </CardInformacao>

          <CardInformacao>
            <div>
              <img src="/dentista01.png" />
              <p>
                Dra. Ana - Ortodontista
                <br />
                Segunda e sextas
              </p>
            </div>

            <div>
              <img src="/dentista02.png" />
              <p>
                Dr. Carlos - Endodontia
                <br />
                Terças e quartas
              </p>
            </div>
          </CardInformacao>

          <CardInformacao>
            <p>Ligue para agendar uma consulta:</p>
            <p>(21) 3699-9999</p>
            <p>(21) 97788-5566</p>
          </CardInformacao>
        </div>
      </section>

      <section className={styles.secao_localizacao}>
        <h2>onde estamos <b>localizados?</b></h2>
        <p>Av.Ayrton Senna, 300 - Barra da Tijuca, Rio de Janeiro. CEP: 22775-904</p>
      </section>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29385.675969309108!2d-43.384802570898614!3d-22.979322563917293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1611596986401!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
        ></iframe>
    </main>
  );
}
