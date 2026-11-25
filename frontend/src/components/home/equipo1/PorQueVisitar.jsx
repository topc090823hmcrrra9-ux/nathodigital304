import EspacioReservado from '../../ui/EspacioReservado'

export default function PorQueVisitar() {
  return (
    <section id="por-que-visitar" className="mx-auto max-w-7xl px-4 py-16" aria-labelledby="titulo-visitar">
      {/* ▼▼▼ EQUIPO 1: SU CÓDIGO VA AQUÍ ▼▼▼ */}

      <EspacioReservado
        equipo="Equipo 1"
        titulo="¿Por qué visitar Las Moras?"
        archivo="src/components/home/equipo1/PorQueVisitar.jsx"
        pendientes={['Razones para visitar la comunidad', 'Tarjetas con icono, título y texto breve', 'Opcional: botón de "Cómo llegar"']}
      />

      <h2 id="titulo-visitar" className="sr-only">¿Por qué visitar Las Moras?</h2>

      {/* ▲▲▲ EQUIPO 1: HASTA AQUÍ ▲▲▲ */}
    </section>
  )
}