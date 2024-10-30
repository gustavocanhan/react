import styles from '@/app/componentes/CardCliente/CardCliente.module.css'

export default function CardCliente(props){
    return(
        <div className={styles.card}>
            <div className={styles.card_imagem}>
                <img src={props.imagem}/>
            </div>
            <div className={styles.card_texto}>
            {props.children}
            </div>
        </div>
    );
}