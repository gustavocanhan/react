import styles from "./page.module.css";

import Carousel from "./componentes/Carousel";
import CardSistemasCorporativos from "./componentes/CardSistemasCorporativos";
import dados from "./dados/dados_sistemascorporativos";
import FiquePorDentro from "./componentes/FiquePorDentro";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container_pagina}>
        <div className={styles.container_carousel}>
          <Carousel />
          
        </div>
        <h2>Sistemas Corporativos</h2>
        <div className={styles.container_cards}>
          {dados.map((dado) => (
            <CardSistemasCorporativos
              key={dado.id}
              icone={dado.icone}
              titulo={dado.titulo}
              descricao={dado.descricao}
              link={dado.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
