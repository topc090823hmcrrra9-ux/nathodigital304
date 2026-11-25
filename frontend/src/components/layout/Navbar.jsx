import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MENU } from '../../data/siteConfig'


export default function NavBar(){
    const [abierto, setAbierto] = useState(false)

    const estiloEnlace = ({ isActive }) =>
        'block rounded-full px-4 py-2 font-bold transition-colors ' +
        (isActive ? 'bg-bosque text-manta' : 'text-bosque-oscuro hover:bg-manta-oscura')

    return(
        <nav aria-label="Menú Principal">
            <button 
                type="button"
                className="rounded-lg border-2 border-bosque px-3 py-1 font-bold text-bosque md:hidden"
                aria-expanded={abierto}
                aria-controls="menu-principal"
                onClick={() => setAbierto(!abierto)}
                >

                    {abierto ? '✕ Cerrar' : '☰ Menú'} 
                </button>
                <ul
                    id="menu-principal"
                    className={
                        (abierto ? 'flex' : 'hidden') +
                        ' absolute left-0 right-0 top-full flex-col gap-1 bg-manta p-4 shadow-lg' +
                        ' md:static md:flex md:flex-row md:bg-transparent md:p-0 md:shadow-none'
                    }
                >
                    {MENU.map((item) => 
                        <li key={item.ruta}>
                            <NavLink to={item.ruta} end className={estiloEnlace} onClick={() => setAbierto(false)}>
                                {item.texto}
                            </NavLink>
                        </li>
                    )}
                </ul>    
        </nav>
    )
}
