import styles from "@/app/paginas/Institucional/Institucional.module.css";
import { IoIosContact } from "react-icons/io";
import dados from "@/app/dados/dados_institucional";

export default function Institucional() {
  return (
    <main className={styles.main}>
      <div className={styles.container_pagina}>
        <section className={styles.secao_topo}>
          <h1>Institucional</h1>
          <img src="/edificiomatarazzo.png" />
          <div>
            <p>
              A Secretaria do Governo Municipal (SGM), criada por meio do{" "}
              <a href="" target="_blank">
                Decreto Municipal nº 60.038/2020
              </a>{" "}
              e alterada pelo{" "}
              <a href="" target="_blank">
                Decreto Municipal nº 60.057/2021
              </a>
              , integra o Gabinete do Prefeito.
            </p>
            <p>
              Tem como atribuições básicas assistir e assessorar o Prefeito no
              desempenho de suas atribuições e nos assuntos relacionados com a
              coordenação e integração das ações do Governo, bem como preparar
              normas e decisões, promovendo sua publicação e preservação.
            </p>
          </div>
        </section>
        <section className={styles.secao_equipe}>
          <GovernoCards />
          <h2>Gabinete do Prefeito</h2>
          <GabineteCard />
          <h2>Casa Civil</h2>
          <CasaCivilCard/>
        </section>
      </div>
    </main>
  );
}

function Card(props) {
  return (
    <div className={styles.container_card}>
      <div className={styles.card_icone}>
        <img src="/icone.png" />
      </div>
      <div className={styles.card_secretaria}>
        <h3>{props.cargo}</h3>
      </div>
      <div className={styles.card_conteudo}>
        <ul>
          <li>
            <span className={styles.card_nome}>{props.nome}</span>
          </li>
          <li>
            <p>Viaduto do Chá, 15 &#40;{props.andar}&#41;</p>
          </li>
          <li>
            <p>CEP: 01002-020</p>
          </li>
          <li>
            <p>Fone: 3113-{props.ramal}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function GovernoCards() {
  return (
    <>
      <div className={styles.row}>
        <Card
          cargo={dados[0].cargo}
          nome={dados[0].nome}
          andar={dados[0].andar}
          ramal={dados[0].ramal}
        />
      </div>

      <div className={styles.row}>
        <Card
          cargo={dados[1].cargo}
          nome={dados[1].nome}
          andar={dados[1].andar}
          ramal={dados[1].ramal}
        />

        <Card
          cargo={dados[2].cargo}
          nome={dados[2].nome}
          andar={dados[2].andar}
          ramal={dados[2].ramal}
        />

        <Card
          cargo={dados[3].cargo}
          nome={dados[3].nome}
          andar={dados[3].andar}
          ramal={dados[3].ramal}
        />
      </div>

      <div className={styles.row}>
        <Card
          cargo={dados[4].cargo}
          nome={dados[4].nome}
          andar={dados[4].andar}
          ramal={dados[4].ramal}
        />

        <Card
          cargo={dados[5].cargo}
          nome={dados[5].nome}
          andar={dados[5].andar}
          ramal={dados[5].ramal}
        />

        <Card
          cargo={dados[6].cargo}
          nome={dados[6].nome}
          andar={dados[6].andar}
          ramal={dados[6].ramal}
        />
      </div>

      <div className={styles.row}>
        <Card
          cargo={dados[7].cargo}
          nome={dados[7].nome}
          andar={dados[7].andar}
          ramal={dados[7].ramal}
        />

        <Card
          cargo={dados[8].cargo}
          nome={dados[8].nome}
          andar={dados[8].andar}
          ramal={dados[8].ramal}
        />
      </div>

      <div className={styles.row}>
        <Card
          cargo={dados[9].cargo}
          nome={dados[9].nome}
          andar={dados[9].andar}
          ramal={dados[9].ramal}
        />

        <Card
          cargo={dados[10].cargo}
          nome={dados[10].nome}
          andar={dados[10].andar}
          ramal={dados[10].ramal}
        />

        <Card
          cargo={dados[11].cargo}
          nome={dados[11].nome}
          andar={dados[11].andar}
          ramal={dados[11].ramal}
        />
      </div>
    </>
  );
}

function GabineteCard() {
  return (
    <>
      <div className={styles.row}>
        <Card
          cargo={dados[12].cargo}
          nome={dados[12].nome}
          andar={dados[12].andar}
          ramal={dados[12].ramal}
        />
      </div>

      <div className={styles.row}>
        <Card
          cargo={dados[15].cargo}
          nome={dados[15].nome}
          andar={dados[15].andar}
          ramal={dados[15].ramal}
        />

        <Card
          cargo={dados[13].cargo}
          nome={dados[13].nome}
          andar={dados[13].andar}
          ramal={dados[13].ramal}
        />

        <Card
          cargo={dados[16].cargo}
          nome={dados[16].nome}
          andar={dados[16].andar}
          ramal={dados[16].ramal}
        />
      </div>

      <div className={styles.row}>
        <Card
          cargo={dados[14].cargo}
          nome={dados[14].nome}
          andar={dados[14].andar}
          ramal={dados[14].ramal}
        />
      </div>
    </>
  );
}

function CasaCivilCard() {
  return (
    <>
      <div className={styles.row}>
        <Card
          cargo={dados[17].cargo}
          nome={dados[17].nome}
          andar={dados[17].andar}
          ramal={dados[17].ramal}
        />
      </div>
      <div className={styles.row}>
        <Card
          cargo={dados[19].cargo}
          nome={dados[19].nome}
          andar={dados[19].andar}
          ramal={dados[19].ramal}
        />

        <Card
          cargo={dados[18].cargo}
          nome={dados[18].nome}
          andar={dados[18].andar}
          ramal={dados[18].ramal}
        />
      </div>
    </>
  );
}
