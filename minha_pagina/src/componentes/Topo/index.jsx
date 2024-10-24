import styles from '@/componentes/Topo/Topo.module.css'

export default function Topo(){
    return(
        <div className={styles.topo_container}>
            <img src="/logo.png" className={styles.img_logo}></img>
            <h1>Topo</h1>
        </div>
    )
}