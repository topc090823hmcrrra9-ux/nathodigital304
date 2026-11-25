import EspacioReservado from '../../ui/EspacioReservado'

export default function ConoceLasMoras() {
  return (
    <section id="conoce-las-moras" className="mx-auto max-w-7xl scroll-mt-32 px-4 py-16" aria-labelledby="titulo-conoce">
      {/* ▼▼▼ EQUIPO 1: SU CÓDIGO VA AQUÍ ▼▼▼ */}

      <EspacioReservado
        equipo="Equipo 1"
        titulo="Conoce Las Moras"
        archivo="src/components/home/equipo1/ConoceLasMoras.jsx"
        pendientes={['¿Dónde se ubica la comunidad?', 'Un poco de su historia', 'Opcional: mapa de Google Maps']}
      />

      <h2 id="titulo-conoce" className="sr-only">Conoce Las Moras</h2>

      {/* ▲▲▲ EQUIPO 1: HASTA AQUÍ ▲▲▲ */}
    </section>
  )
}