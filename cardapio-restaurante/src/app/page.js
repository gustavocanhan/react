'use client';
import styles from "./page.module.css";
import Categorias from "./componentes/Categorias";
import CampoDeBusca from "./componentes/CampoDeBusca";
import Cards from "./componentes/Cards";
import { retornarProdutos, filtrarProduto, retornarEntrada, buscarProduto } from "./servico";
import { useState } from "react";

export default function Home() {
  const [listaProdutos, setListaProdutos] = useState(retornarEntrada);
  const [textoBusca, setTextoBusca] = useState("")

  const handleFiltrarProdutoCategoria = (categoria) => {
    setListaProdutos(filtrarProduto(categoria));
  }

  const handleBuscarProduto = (textoDigitado) =>{
    setTextoBusca(textoDigitado);
    setListaProdutos(buscarProduto(textoDigitado));
  }

  return (
    <div className={styles.pagina}>
      <header className={styles.topo}>
        <div>
          <h1>RESTAURANT</h1>
          <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
        </div>
      </header>
      <main className={styles.main}>
        <Categorias 
          entradas={() => handleFiltrarProdutoCategoria("Entradas")} 
          massas={() => handleFiltrarProdutoCategoria("Massas")} 
          carnes={() => handleFiltrarProdutoCategoria("Carnes")} 
          bebidas={() => handleFiltrarProdutoCategoria("Bebidas")} 
          saladas={() => handleFiltrarProdutoCategoria("Saladas")} 
          sobremesas={() => handleFiltrarProdutoCategoria("Sobremesas")} 
        />
        <CampoDeBusca
          value={textoBusca}
          eventoBusca={(event) => handleBuscarProduto(event.target.value)}
        />
        <h2>Cardápio</h2>
        <div className={styles.container_cards}>
          {listaProdutos.map((produto) => (
            <Cards key={produto.id} imagem={produto.imagem} nome={produto.nome} categoria={produto.categoria} descricao={produto.descricao} preco={produto.preco} />
          ))}
        </div>
      </main>
    </div>
  );
}
