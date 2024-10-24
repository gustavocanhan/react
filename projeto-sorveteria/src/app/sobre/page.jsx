import styles from "@/app/sobre/Sobre.module.css";

export default function Sobre() {
  return (
    <main>
      <section className={styles.secao_capa}>
        <h1>a gelateria</h1>
      </section>

      <section className={styles.secao}>
        <div className={styles.container}>
          <h2>sobre nós</h2>
          <span>Nós simplesmente amamos sorvete!</span>
          <p>
            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
            sorvete produzido. Fazemos o melhor sorvete para os nossos clientes
            e gostamos de receber elogios. Estamos operando desde 2009 com as
            melhores matérias-primas para a produção final do sorvete. Vendemos
            tanto para varejo como para atacado.
          </p>
          <p>
            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa
            loja ou levar para sua residência e aproveitar junto com a família.
            Também vendemos para estabelecimentos e criamos eventos como festa
            de aniversário, formaturas e eventos empresariais. Para contratar os
            nossos serviços, basta entrar em contato conosco. Iremos
            proporcionar o melhor atendimento e os melhores produtos para você
            fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
          </p>
        </div>
      </section>

      <section className={styles.container_imagem}>
        <img src="/sobre-image.jpg"></img>
        <img src="/sorveteria.jpg"></img>
      </section>
    </main>
  );
}
