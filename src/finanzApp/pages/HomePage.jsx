import { Typography } from "@mui/material"
import { FinanzAppLayout } from "../layout/FinanzAppLayout"
import GraficoTorta from '../components/echarts/GraficoTorta'

export const HomePage = () => {
  return (
    <>
      <Typography variant="h1">Home</Typography>
      <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus optio perferendis similique modi commodi tenetur nisi architecto facere, mollitia maxime minus at pariatur quisquam maiores molestias accusantium nulla fugit!</Typography>
      <hr />
      <GraficoTorta />
    </>
  )
}
