import styles from '@/app/componentes/Cards/Cards.module.css'


export default function Cards(props){
    return(
        <div className={styles.container_card}>
            <div className={styles.card_imagem}>
                <img src={props.imagem}/>
            </div>
            <div className={styles.card_conteudo}>
                <div>
                    <h3>{props.nome}</h3>
                    <small>{props.categoria}</small>
                    <p>{props.descricao}</p>
                </div>
            </div>
            <div className={styles.card_preco}>
                    <span>R$ {props.preco}</span>
                </div>
        </div>
    )
}