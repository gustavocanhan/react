import styles from '@/app/componentes/Topo/Topo.module.css';

export default function Topo(){
    return(
        <header className={styles.topo}>
            <img src='/dente.png'/>
            <h1>Dentes Saudáveis</h1>
        </header>
    );
}