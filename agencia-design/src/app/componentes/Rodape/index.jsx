import styles from '@/app/componentes/Rodape/Rodape.module.css'

export default function Rodape(props){
    return(
        <footer className={props.alterarTema ? styles.dark_mode : styles.ligth_mode}>
            <h2>Rodape</h2>
        </footer>
    )
}