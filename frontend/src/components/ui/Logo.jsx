import { Link } from 'react-router-dom';
import { SITIO } from '../../data/siteConfig'
import logoImg from '../../assets/Logo.jpeg'

export default function Logo({claro = false }) {
    const colorNombre = claro ? 'text-manta': 'text-bosque-oscuro'
    const colorLema = claro ? 'text-maiz': 'text-grana'
    const imagen = logoImg
    
    return (
        <Link to='/' className="flex items-center gap-3" aria-label={`${SITIO.nombre}, ir al inicio`}>
            <img
                src={imagen}
                alt=""
                aria-hidden="true"
                className='h-10 w-10 shrink-0 object-contain'
            />

            <span className='leading-tight'>
                <span className={`block font-titulo text-xl font-extrabold ${colorNombre}`}>{SITIO.nombre}</span>
                <span className={`block text-xs font-bold uppercase tracking-[0.2em] ${colorLema}`}>{SITIO.lema}</span>
            </span>
        </Link>
    )
}
