import styles from '@/app/componentes/Rodape/Rodape.module.css'
import Image from 'next/image'
import Logo from '/public/logo.png'
import imgFacebook from '/public/facebook.png'
import imgTwitter from '/public/twitter.png'
import imgLinkedin from '/public/linkedin.png'
import imgDribble from '/public/dribble.png'
import imgBehance from '/public/behance.png'
import imgGoogle from '/public/google.png'

export default function Rodape(props){
    return(
        <div className={props.alterarTema ? styles.dark_mode : styles.light_mode}>
            <footer className={styles.rodape}>
                <div className={styles.rodape_conteudo}>
                    <div className={styles.container_conteudo}>
                        <Image src={Logo} alt='logo'/>
                        <p>Ajudamos a criar uma pernsonalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
                    </div>
                    <div className={styles.container_midia}>
                        <Image src={imgFacebook} alt='Facebook'/>
                        <Image src={imgTwitter} alt='Twitter'/>
                        <Image src={imgLinkedin} alt='Linkedin'/>
                        <Image src={imgDribble} alt='Dribble'/>
                        <Image src={imgBehance} alt='Behance'/>
                        <Image src={imgGoogle} alt='Google Plus'/>
                    </div>
                </div>
                <div className={styles.rodape_dev}>
                    <p>Copyright 2024 &copy; <span>Gustavo Canhan</span></p>
                </div>
            </footer>
        </div>
    )
}