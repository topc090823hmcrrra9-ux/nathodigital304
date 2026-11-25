import { Link } from "react-router-dom"

export default function EnConstruccion(){
    return(
        <section className="mx-auto max-w-2xl px-4 py-24 text-center">
            <p className="text-5xl" aria-hidden="true">🚧</p>
            <h1 className="mt-4 text-3xl font-extrabold">Estamos construyendo esta sección</h1>
            <p className="mt-3 text-carbon/80">Este modulo lo esta programando otro equipo.¡vuelva pronto!</p>
            <Link to="/" className="mt-8 inline-block rounded-full bg-maiz px-6 py-3 font-extrabold text-carbon hover:bg-maiz/80">
            Regresar al inicio</Link>
        </section>
    )
}
