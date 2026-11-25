import { Link } from 'react-router-dom'
import { SITIO, MENU} from '../../data/siteConfig'
import Logo from '../ui/Logo'
import GrecaOtomi from '../ui/GrecaOtomi'

export default function Footer(){
    return(
        <footer className='bg-bosque-oscuro text-manta'>
            <GrecaOtomi />
            <div className='mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3'>
                <div>
                    <Logo claro />
                    <p className='mt-3 text-sm text-manta/80'>
                        Plataforma para aprender la lengua otomí y conocer el patrimonio del sitio {SITIO.comunidad}.
                    </p>
                </div> 
                {/* Columna 2: enlaces */}
                <div>
                    <h2 className='font-titulo text-lg text-maiz'>Explora</h2>
                    <ul className='mt-3 space-y-1 text-sm'>
                            {MENU.map((item)=>(
                                <li key={item.ruta}>
                                    <Link to={item.ruta} className='hover:text-maiz hover:underline'>{item.texto}</Link>
                                </li>
                            
                            ))}    
                    </ul>    
                </div> 
                {/*Columna 3: creditos */}
                <div>
                    <h2 className='font-titulo text-lg text-maiz'>Proyecto Escolar</h2>
                    <p className='mt-3 text-sm text-manta/80'>{SITIO.escuela}</p>
                    <p className='text-sm text-manta/80'> Hecho por Estudiantes del grupo 304</p>

                </div>
            </div>
            <p className='border-t border-manta/20 py-4 text-center text-xs text-manta/70'>
                © {SITIO.anio} {SITIO.nombre} {SITIO.lema}
            </p>
        </footer>
    )
}
