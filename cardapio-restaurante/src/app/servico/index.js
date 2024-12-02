import { produtos } from "../data/data_produtos";

export const retornarProdutos = () => {
    return produtos;
};

export const retornarEntrada = () => {
    return produtos.filter((produto) => produto.categoria === 'Entradas')
}

export const filtrarProduto = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria)
}

export const buscarProduto = (textoDigitado) => {
    return produtos.filter(
        (produto) =>
            produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
            produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    )
}