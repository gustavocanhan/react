import styles from "@/app/sabores/Sabores.module.css";

export default function Sabores() {
  return (
    <main>
      <section className={styles.secao_capa}>
        <h1>nossos sabores</h1>
      </section>

      <section className={styles.secao}>
        <div className={styles.container}>
          <h2>sabores de sorverte</h2>
          <div className={styles.container_card}>
            <div>
              <img src="sabor-oreo.png"></img>
              <h3>Sorvete de Oreo</h3>
              <p>Delecioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>

            <div>
              <img src="sabor-pistache.png"></img>
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>

            <div>
              <img src="sabor-cookies-avela.png"></img>
              <h3>Sorvete Cookies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
            </div>

            <div>
              <img src="sorbet-kiwi.png"></img>
              <h3>Sorvete de Kiwi</h3>
              <p>
                Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
              </p>
            </div>

            <div>
              <img src="sorbet-morango.png"></img>
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>

            <div>
              <img src="sorbet-limao.png"></img>
              <h3>Sorvete de Limão Siciliano</h3>
              <p>
                O incrivel sorvete gourmet de limão siciliano vai te encantar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
