import styles from "./page.module.css";
import Card from "./componentes/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Card nome={"Hamburguer"} preco={18} categoria={"Lanche"} imagem={'/hamburguer.jpg'} />
      <Card nome={"Coca-cola"} preco={7} categoria={"Bebida"} imagem={'/coca-cola.webp'} />
      <Card nome={"Sorvete"} preco={12} categoria={"Sobremesa"} imagem={'/sorvete.jpg'} />
    </div>
  );
}
