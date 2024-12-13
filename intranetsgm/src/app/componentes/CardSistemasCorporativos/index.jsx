import styles from '@/app/componentes/CardSistemasCorporativos/CardSistemasCorporativos.module.css'

export default function CardSistemasCorporativos(props){
    return(
        <a className={styles.container_card} href={props.link} target='_blank'>
            <div className={styles.card_titulo}>
                <span>{props.icone}</span>
                <h3>{props.titulo}</h3>
            </div>
            <div className={styles.card_descricao}>
                <p>{props.descricao}</p>
            </div>
        </a>
    )
}