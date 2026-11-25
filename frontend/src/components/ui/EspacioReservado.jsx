export default function EspacioReservado({ equipo, titulo, archivo, pendientes = [] }) {
    return (
        <div className="rounded-2xl border-4 border-dashed border-maiz bg-maiz/10 p-8 text-center">
            <span className="inline-block rounded-full bg-grana px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-manta">
                Espacio reservado · {equipo}
            </span>

            <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
                {titulo}
            </h2>

            <p className="mt-2 text-sm text-carbon/70">
                Programar en: <code className="break-all rounded bg-carbon/10 px-2 py-0.5 font-mono text-barro">{archivo}</code>
            </p>

            {pendientes.length > 0 && (
                <ul className="mx-auto mt-5 max-w-md space-y-1 text-left text-carbon/80">
                    {pendientes.map((p) => (
                        <li key={p} className="flex gap-2">
                            <span className="text-grana" aria-hidden="true">•</span>
                            {p}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}