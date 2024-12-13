'use client';
import styles from '@/app/componentes/Carousel/Carousel.module.css';
import React, { useState, useEffect, useRef } from 'react';

export default function Carousel() {
    const imagens = [
        { src: '/Comunicado_AgostoDourado.png', link: '/pagina-1' },
        { src: '/Comunicado_DezembroVerde.png', link: '/pagina-2' },
        { src: '/Comunicado_JunhoVermelho.png', link: '/pagina-3' },
        { src: '/Comunicado_AgostoDourado.png', link: '/pagina-4' },
        { src: '/Comunicado_DezembroVerde.png', link: '/pagina-5' },
        { src: '/Comunicado_JunhoVermelho.png', link: '/pagina-6' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const autoplay = useRef(null);

    const exibirImagem = (index) => {
        setCurrentIndex((index + imagens.length) % imagens.length);
    };

    const proximaImagem = () => {
        exibirImagem(currentIndex + 1);
    };

    const anteriorImagem = () => {
        exibirImagem(currentIndex - 1);
    };

    const startAutoplay = () => {
        autoplay.current = setInterval(proximaImagem, 3000);
    };

    const stopAutoplay = () => {
        clearInterval(autoplay.current);
    };

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay(); // Executa corretamente
    }, []);

    return (
        <div
            className={styles.container_carousel}
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
        >
            <div
                className={styles.carousel_images}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {imagens.map((imagem, index) => (
                    <div key={index} className={styles.slide}>
                        <img src={imagem.src} alt={`Imagem ${index + 1}`} />
                        <a
                            href={imagem.link}
                            className={styles.content_button}
                            target="_blank" // Para abrir em uma nova aba (opcional)
                            rel="noopener noreferrer"
                        >
                            Acessar Conteúdo
                        </a>
                    </div>
                ))}
            </div>
            <button className={styles.btn_anterior} onClick={anteriorImagem}>
                &#10094;
            </button>
            <button className={styles.btn_proximo} onClick={proximaImagem}>
                &#10095;
            </button>
        </div>
    );
}
