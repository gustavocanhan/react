import styles from '@/componentes/Card/Card.module.css'

export default function Card(props){
    return(
        <div className={styles.card}>
            <h3>{props.signo}</h3>
            <img src={props.image}/>
            <span>{props.dataInicio} - {props.dataFim}</span>
        </div>
    )
}