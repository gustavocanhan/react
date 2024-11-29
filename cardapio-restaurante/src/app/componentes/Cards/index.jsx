import styles from '@/app/componentes/Cards/Cards.module.css'
import { produtos } from '@/app/data/data_produtos'

export default function Cards(){
    return(
        <div className={styles.container_card}>
            <div className={styles.card_imagem}>
                <img src={produtos[0].imagem}/>
            </div>
            <div className={styles.card_conteudo}>
                <div>
                    <h3>{produtos[0].nome}</h3>
                    <small>{produtos[0].categoria}</small>
                    <p>{produtos[0].descricao}</p>
                </div>
                <div>
                    <span>R$ {produtos[0].preco}</span>
                </div>
            </div>
        </div>
    )
}