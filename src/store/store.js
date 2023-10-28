import { configureStore } from "@reduxjs/toolkit";  
import { authSlice } from './index';
import { loadingSlice } from './loading';
import { ingresosSlice } from './ingresos';
import { egresosSlice } from './egresos';
import { inversionesSlice } from './inversiones';
import { tarjetasSlice } from './tarjetas';
import { bolsilloSlice } from './bolsillo';
import { flujoSlice } from './flujo';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        loading: loadingSlice.reducer,
        ingresos: ingresosSlice.reducer,
        egresos: egresosSlice.reducer,
        inversiones: inversionesSlice.reducer,
        tarjetas: tarjetasSlice.reducer,
        bolsillo: bolsilloSlice.reducer,
        flujo: flujoSlice.reducer,
    },
});