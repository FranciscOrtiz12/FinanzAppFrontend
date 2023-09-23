import { CircularProgress } from "@mui/material"
import { useSelector } from "react-redux";

export const Loading = () => {
    const { isLoading } = useSelector( state => state.loading );

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(170, 212, 1, 0.2)',
                display: isLoading ? 'flex' : 'none',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999, // Asegura que está por encima de otros elementos
            }}
        >
            <div>
                <CircularProgress color="warning" />
            </div>
        </div>
    )
}