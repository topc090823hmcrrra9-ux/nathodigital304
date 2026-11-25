import { useEffect, useState } from "react";
import { SLIDES } from '../../data/bannerSlides'

const INTERVALO = 6000

export default function HeroBanner(){
    const [actual, setActual] = useState(0)
    const [pausado, setPausado] = useState(false)
    const total = SLIDES.length

    const siguiente = () => setActual((i) => (i + 1) % total)
    const anterior = () => setActual((i) => (i - 1 + total) % total)

    useEffect (() => {
        if (pausado) return
        const id = setInterval(() => setActual((i) => (i + 1) % total), INTERVALO)
        return () => clearInterval(id)
    }, [pausado, total])

    return(
        <section
            className="relative h-[420px] overflow-hidden bg-bosque-oscuro sm:h-[520px]"
            aria-roledescription="carrusel"
            aria-label="Imagenes de Las Moras"
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
            >
                {SLIDES.map((slide, i) => (
                    <div
                        key={slide.imagen}
                        inert={i !== actual}
                        className={`absolute inset-0 transition-opacity duration-1000 ${i === actual ? 'opacity-100': 'opacity-0'}`}
                        >
                            {/* foto de fondo. Si aún no existe, se ve verde el bosque */}
                        <div
                            role = "img"
                            aria-label={slide.alt}
                            className = "absolute inset-0 bg-cover bg-center"
                            style ={{ backgroundImage: `url(${slide.imagen})`}}
                        />

                        {/* Capa oscura para que el texto se lea sobre cualquier foto */}
                        <div className="absolute inset-0 bg-gradient-to-r from-bosque-oscuro/90 via-bosque-oscuro/50 to-transparent" />

                        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
                            <h1 className="max-w-xl text-4xl font-extrabold text-manta sm:text-6xl">{slide.titulo}</h1>
                            <p className="mt-4 max-w-lg text-lg text-manta/90">{slide.texto}</p>
                            <a
                            href="#conoce-las-moras"
                            className="mt-8 w-fit rounded-full bg-maiz px-6 py-3 font-extrabold text-carbon shadow hover:bg-maiz/85"
                            >
                                Conoce Las Moras ⬇
                            </a>
                        </div>
                        </div>
                ))}
                {/* Flechas (En celular se ocultan para no tapar el texto) */}
                <button type="button" onClick={anterior} aria-label="Imagen Anterior"
                className="absolute left-3 top-1/2 hidden sm:block -translate-y-1/2 rounded-full bg-manta/80 px-3 py-2 text-2xl font-bold text-bosque-oscuro hover:bg-manta">‹</button>
                <button type="button" onClick={siguiente} aria-label="Imagen Siguiente"
                className="absolute right-3 top-1/2 hidden sm:block -translate-y-1/2 rounded-full bg-manta/80 px-3 py-2 text-2xl font-bold text-bosque-oscuro hover:bg-manta">›</button>

                {/* Punto en forma de rombo */}

                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3">

                {SLIDES.map((slide, i) => (
                    <button
                        key={slide.imagen}
                        type="button"
                        onClick={() => setActual(i)}
                        aria-label={`Ver Imagen ${i + 1}`}
                        aria-current={i === actual}
                        className={`h-3.5 w-3.5 rotate-45 border-2 border-manta ${i === actual ? 'bg-maiz' : 'bg-transparent'}`}
                    />
                    
                ))}
                </div>
            </section>
    )
}
