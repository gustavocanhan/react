import styles from "@/componentes/SecaoProdutos/Produtos.module.css";
import CardProduto from "../CardProduto/CardProduto";

export default function Produtos() {
  return (
    <section className={styles.secao} id="produtos">
      <div className={styles.container}>
        <div>
          <h2>Nossos Produtos</h2>
          <p>
            Trabalhamos com óculos de grau, óculos de sol, lentes transition nos
            modelos masculino, feminino e infantil.
          </p>
          <p>
            Todos os nossos preços são acessíveis e contam com a melhor
            qualidade do mercado.
          </p>
        </div>
        <CardProduto/>
        <div>
          <h3>Todos os nossos produtos incluem:</h3>
          <ul>
            <li>Garantia de 1 ano</li>
            <li>Manutenção preventiva</li>
            <li>Descontos especiais na compra da segunda unidade</li>
            <li>Flexibilidade de pagamento</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
