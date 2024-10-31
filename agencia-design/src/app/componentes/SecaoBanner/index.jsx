import styles from '@/app/componentes/SecaoBanner/SecaoBanner.module.css'

export default function SecaoBanner(){
    return(
        <section className={styles.secao_banner}>
            <div className={styles.container_imagem}>

            </div>
            <div className={styles.container_texto}>
                <p>branding / ui / ux / tecnologia</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    )
}