import styles from '@/styles/Home.module.css'

export default function Card(){
    return(
        <div className={styles.card}> 
            <h1>Hello World</h1>
            <p>Esse é o nosso novo componente</p>
            <p>Componente criado no React.js</p>
        </div>
    )
}