import styles from '@/app/componentes/Card/Card.module.css';

export default function Card(props){
    return(
        <div className={styles.card}>
            <div className={styles.card_titulo}>
                <span>{props.data}</span>
                <h3>{props.cargo}</h3>
                <small>{props.local}</small>
            </div>
            <div className={styles.card_texto}>
                <p>{props.conteudo}</p>
            </div>
        </div>
    )
}