
import Box from '@mui/material/Box';
import{Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { red } from '@mui/material/colors';

const Home=()=>
{
    const Item = styled(Paper)(() => ({
        textAlign: 'center',
        
      }));
    return(
    <>
    <div className='data-content'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Item>
          <Card style={{ minWidth: 275,backgroundColor:"red"}}>
      <CardContent>
        
      </CardContent>
      

      </Card>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card style={{ minWidth: 275,backgroundColor:"blue"}}>
      <CardContent>
        
      </CardContent>
      

      </Card>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card style={{ minWidth: 275,backgroundColor:"green"}}>
      <CardContent>
        
      </CardContent>
      

      </Card>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card style={{ minWidth: 275,backgroundColor:"yellow"}}>
      <CardContent>
        
      </CardContent>
      

      </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>
    )
}
export default Home