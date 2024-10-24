import styles from '@/componentes/Topo/Topo.module.css';
import Link from 'next/link'

export default function Header(){
    return (
        <header className={styles.topo}>
            <div className={styles.container}>
                <div>
                    <img src='/logo.png' className={styles.logo}/>
                </div>
                <div>
                    <Link className={styles.link} href="#produtos">PRODUTOS</Link>
                    <Link className={styles.link} href="#sobre">SOBRE</Link>
                    <Link className={styles.link} href="#contato">CONTATO</Link>
                </div>
            </div>
        </header>
    )
}