import styles from '@/app/componentes/Rodape/Rodape.module.css';

export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <p>&copy; Copyright 2021 | Consultório dentes saudáveis</p>
        </footer>
    );
}