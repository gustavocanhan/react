import styles from '@/componentes/SecaoSobre/sobre.module.css'
import CardContato from '../CardContato/CardContato'

export default function Sobre(){
    return(
        <section className={styles.secao}>
            <div className={styles.container}>
                <div>
                    <h2>quem somos nós?</h2>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                </div>
                <CardContato/>
            </div>
        </section>
    )
}