import styles from '@/app/componentes/CardInformacao/CardInformacao.module.css';

export default function CardInformacao(props){
    return(
        <div className={styles.card}>
            <div className={styles.card_titulo}>
                <h2>informações</h2>
            </div>
            <div className={styles.card_texto}>
            {props.children}
            </div>
        </div>
    )
}