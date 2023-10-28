import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'

export const CardNumber = ({ bgColor = '', textHeader, value }) => {
  return (
    <Card 
        sx={{ 
            width: '100%', // Usar un ancho relativo
            margin: '0.5em', // Utilizar valores relativos para el margen
            backgroundColor: bgColor
        }}
    >
        <CardContent>

            <Typography sx={{ fontSize: '1.2em' }} color="white" gutterBottom> {/* Usar em o rem para el tamaño de fuente */}
                { textHeader }
            </Typography>

            <Typography textAlign={'end'} color={'white'} variant="h6">
                { value }
            </Typography>

        </CardContent>
    </Card>
  )
}
