import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { FinanZapRoutes } from "../finanzApp/routes/FinanZapRoutes"
import { useSelector } from "react-redux"
import { Loading } from "../ui/Loading"

export const AppRouter = () => {
    const { status } = useSelector( state => state.auth );

    return (
        <Routes>

            {
                ( status === 'authenticated' )
                ? <Route path="/*" element={ <FinanZapRoutes /> }/>
                : <Route path="/auth/*" element={ <AuthRoutes /> }/>
            }

            <Route path='/*' element={ <Navigate to={'/auth/login'} /> }></Route>

        </Routes>
    )
}