import { useId } from 'react'

const C = { bosque: '#3f5d3a', grana: '#b8336a', maiz: '#e9b33c', manta: '#fbf6ec', turquesa: '#1f8a8a' }

export default function GrecaOtomi({ className = '' }){
    const idPatron = 'greca' + useId().replace(/[^a-zA-Z0-9_-]/g, '')

    return(
        <div className={`h-4 w-full ${className}`} aria-hidden="true">
            <svg width="100%" height="100%">
                <defs>
                    <pattern id={idPatron} width="48" height="16" patternUnits="userSpaceOnUse">
                        <rect width="48" height="16" fill={C.bosque}/>
                        <polygon points="12,1 19,8 12,15 5,8" fill={C.grana}/>
                        <polygon points="12,5 15,8 12,11 9,8" fill={C.maiz}/>
                        <polygon points="36,1 43,8 36,15 29,8" fill={C.turquesa}/>
                        <polygon points="36,5 39,8 36,11 33,8" fill={C.manta}/>
                        <circle cx="24" cy="3" r="1" fill={C.maiz}/>
                        <circle cx="24" cy="13" r="1" fill={C.maiz}/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${idPatron})`}/>
            </svg>

        </div>
    )
}