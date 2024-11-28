import styles from '@/app/componentes/Categorias/Categorias.module.css'

export default function Categorias(){
    return(
        <div className={styles.container_botoes}> 
            <button><img src="/entrada.png"/>Entradas</button>
            <button><img src="/massa.png"/>Massas</button>
            <button><img src="/carne.png"/>Carnes</button>
            <button><img src="/bebidas.png"/>Bebidas</button>
            <button><img src="/salada.png"/>Saladas</button>
            <button><img src="/sobremesa.png"/>Sobremesas</button>
        </div>
    )
}