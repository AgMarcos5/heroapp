import { CircularProgress, Grid } from '@mui/material'

export const CheckingAuth = () => {
  return (
    <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{minHeight: '100vh', padding: 4}}
    >
        <CircularProgress style={{'color': '#3f41cc'}} />
    </Grid>
  )
}
