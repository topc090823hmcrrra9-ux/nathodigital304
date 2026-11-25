import HeroBanner from "../components/home/HeroBanner";
import ExploraPlataforma from "../components/home/ExploraPlataforma";

// Secciones del EQUIPO 1
import ConoceLasMoras from '../components/home/equipo1/ConoceLasMoras'
import GaleriaComunidad from '../components/home/equipo1/GaleriaComunidad'
import PorQueVisitar from '../components/home/equipo1/PorQueVisitar'

export default function Inicio() {
    return (
        <>
          {/* 1. Banner */}
          <HeroBanner />

          {/* 2, 3 y 4. Secciones del EQUIPO 1 */}
          <ConoceLasMoras />
          <GaleriaComunidad />
          <PorQueVisitar />

          {/* 5. Explora la plataforma */}
          <ExploraPlataforma />
        </>
    )
}