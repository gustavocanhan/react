import styles from '@/app/componentes/Categorias/Categorias.module.css'

export default function Categorias(props){
    return(
        <div className={styles.container_botoes}> 
            <button onClick={props.entradas}><img src="/entrada.png"/>Entradas</button>
            <button onClick={props.massas}><img src="/massa.png"/>Massas</button>
            <button onClick={props.carnes}><img src="/carne.png"/>Carnes</button>
            <button onClick={props.bebidas}><img src="/bebidas.png"/>Bebidas</button>
            <button onClick={props.saladas}><img src="/salada.png"/>Saladas</button>
            <button onClick={props.sobremesas}><img src="/sobremesa.png"/>Sobremesas</button>
        </div>
    )
}