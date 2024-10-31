import styles from "@/app/componentes/SecaoExperienciaTrabalho/SecaoExperienciaTrabalho.module.css";
import Card from "../Card";

export default function SecaoExperienciaTrabalho(props) {
  return (
    <div className={props.alterarTema ? styles.dark_mode : styles.light_mode}>
      <section className={styles.secao_experiencia}>
        <div className={styles.container_titulo}>
          <h2>Experiências De Trabalho</h2>
          <p>
            Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação
            de Sites e Marketing Digital, nos empenhamos diariamente para
            entregar resultados que tragam impacto aos nossos clientes.
          </p>
        </div>
        <div className={styles.container_card}>
          <Card
            data="junho 2012 - 2016"
            cargo="Web Designer"
            local="Pied Piper StartUp."
            conteudo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
          />
          <Card
            data="agosto 2016 - 2019"
            cargo="Product Designer"
            local="E Corp."
            conteudo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
          />
          <Card
            data="fevereiro 2019 - 2021"
            cargo="Digital Consulting"
            local="Arasaka Inc."
            conteudo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
          />
        </div>
      </section>
    </div>
  );
}
