import { Link } from 'react-router-dom'
import { MODULOS } from '../../data/siteConfig'

export default function ExploraPlataforma(){
    return (
        <section className="bg-bosque py-16" aria-labelledby="titulo-explora">
            <div className="mx-auto max-w-7xl px-4">
                <p className="text-center text-sm font-extrabold uppercase tracking-[0.25em] text-maiz">Raíces y Código</p>
                <h2 id="titulo-explora" className="mt-2 text-center text-3xl font-extrabold text-manta sm:text-4xl">
                    Explora la plataforma
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {MODULOS.map((m) => (
                        <Link
                          key={m.ruta}
                          to={m.ruta}
                          className="group rounded-2xl bg-manta p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                          >
                            <span className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl ${m.color}`} aria-hidden="true">
                                {m.icono}
                            </span>
                            <h3 className="mt-4 text-xl font-extrabold">{m.titulo}</h3>
                            <p className="mt-2 text-carbon/80">{m.texto}</p>
                            <span className="mt-4 inline-block font-extrabold text-grana group-hover:underline">Entrar → </span>
                          </Link>
                    ))}
                </div>   
            </div>
        </section>
    )
}