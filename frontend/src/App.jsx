import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Inicio from './pages/inicio'
import EnConstruccion from './components/ui/EnConstruccion'

export default function App() {
  return (
    <Routes>
      {/* Layout envuelve a todas las páginas (Header + página + Footer) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="*" element={<EnConstruccion />} />
      </Route>
    </Routes>
  )
}