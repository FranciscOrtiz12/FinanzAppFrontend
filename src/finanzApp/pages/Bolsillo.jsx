import { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { BoxPincipal } from '../components/ui/BoxPincipal';

import { AddCard } from '@mui/icons-material';
import { CardNumber } from '../components/CardNumber';
import { DefaultTable } from '../components/Table/DefaultTable';

const colors = {
  green: '#26bdc5',
  red: '#FF7F7F',
  yellow: '#eace20',
  orange: '#ff8d1d',
}

// tabla

const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
  },
];

function createData(id, name, code, population, size) {
  const density = population / size;
  return { id, name, code, population, size, density };
}

const rows = [
  createData(1, 'India', 'IN', 1324171354, 3287263),
  createData(2, 'China', 'CN', 1403500365, 9596961),
  createData(3, 'Italy', 'IT', 60483973, 301340),
  createData(4, 'United States', 'US', 327167434, 9833520),
  createData(5, 'Canada', 'CA', 37602103, 9984670),
  createData(6, 'Australia', 'AU', 25475400, 7692024),
  createData(7, 'Germany', 'DE', 83019200, 357578),
  createData(8, 'Ireland', 'IE', 4857000, 70273),
  createData(9, 'Mexico', 'MX', 126577691, 1972550),
  createData(10, 'Japan', 'JP', 126317000, 377973),
  createData(11, 'France', 'FR', 67022000, 640679),
  createData(12, 'United Kingdom', 'GB', 67545757, 242495),
  createData(13, 'Russia', 'RU', 146793744, 17098246),
  createData(14, 'Nigeria', 'NG', 200962417, 923768),
  createData(15, 'Brazil', 'BR', 210147125, 8515767),
  createData(16, 'South Korea', 'KR', 51606633, 100210),
  createData(17, 'Spain', 'ES', 46754778, 505990),
  createData(18, 'Argentina', 'AR', 44780677, 2780400),
  createData(19, 'Egypt', 'EG', 100388073, 1002450),
  createData(20, 'South Africa', 'ZA', 58558270, 1221037),
  createData(21, 'Turkey', 'TR', 83429615, 783562),
  createData(22, 'Greece', 'GR', 10727668, 131957),
  createData(23, 'Thailand', 'TH', 69428524, 513120),
  createData(24, 'Indonesia', 'ID', 270625568, 1904569),
  createData(25, 'Colombia', 'CO', 50339443, 1141748),
  createData(26, 'Peru', 'PE', 32510453, 1285216),
  createData(27, 'Saudi Arabia', 'SA', 34268528, 2149690),
  createData(28, 'Morocco', 'MA', 36471769, 710850),
  createData(29, 'Ukraine', 'UA', 41844382, 603500),
  createData(30, 'Vietnam', 'VN', 96462106, 331212),

];


export const Bolsillo = () => {


  // combobox

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>

    <BoxPincipal>

      {/* Seleccionar y/o agregar nueva tarjeta */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: { xs: 'column', md: 'row' } }}>


        <FormControl sx={{ m: 1, minWidth: 180 }} size="small">

          <InputLabel id="demo-select-small-label">Cuenta Bancaria</InputLabel>

          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Cuenta Bancaria"
            onChange={handleChange}
          >
            <MenuItem value={10}>Debito BCI</MenuItem>
            <MenuItem value={20}>Credito BCI</MenuItem>
            <MenuItem value={30}>Debito Falabella</MenuItem>
            <MenuItem value={40}>Credito Falabella</MenuItem>
          </Select>

        </FormControl>


        <Button size='small' variant="outlined" startIcon={<AddCard />}>
          Nueva Tarjeta
        </Button>
      </Box>

      <Box
        sx={{
          padding: [2, 3], // Utiliza un espacio de relleno más pequeño en pantallas pequeñas
          display: 'flex',
          flexDirection: ['column', 'row'], // Cambia la dirección de la fila a columna en pantallas pequeñas
          gap: 2, // Agrega un espacio entre las tarjetas
        }}
      >

        <CardNumber bgColor={ colors.green } textHeader={"Ingresos"} value={'$1500000'} />
        <CardNumber bgColor={ colors.red } textHeader={"Gastos"} value={'$20000'}/>
        <CardNumber bgColor={ colors.yellow } textHeader={"Transacciones"} value={'4'}/>
        <CardNumber bgColor={ colors.orange } textHeader={"Invertido"} value={'$2500000'}/>
        
      </Box>

      <Box>

        <DefaultTable key={1} rows={rows} columns={columns} />

      </Box>

    </BoxPincipal>

    </>
  )
}
