import { Navigate, Route, Routes } from 'react-router-dom'
import { FinanzAppLayout } from '../layout/FinanzAppLayout'
import { Bolsillo, HomePage, FlujoDinero, Inversiones } from '../pages/index'

export const FinanZapRoutes = () => {
  return (
    <FinanzAppLayout>
      <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/bolsillo" element={ <Bolsillo /> } />
          <Route path="/inversiones" element={ <Inversiones /> } />
          <Route path="/flujo" element={ <FlujoDinero /> } />
          <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
    </FinanzAppLayout>
  )
}
