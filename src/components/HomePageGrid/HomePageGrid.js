import Grid from '@mui/material/Grid';
import HomePageCard from './HomePageCard';

import board1 from '../../pics/board1.jpeg';
import board2 from '../../pics/board2.jpeg';
import board3 from '../../pics/board4.jpeg';
import veggie from '../../pics/veggie.jpeg';
import cheese from '../../pics/Cheese.JPG'
import camille1 from '../../pics/camille_board1.jpg'

const HomePageGrid = props => {
    return(
            <Grid container justifyContent="center" spacing={2}>
                <Grid item padding="0px" xs={4}>
                    <HomePageCard 
                        image={cheese}
                        title="Cheese"
                        text="Hand picked from the most quality local farms"
                    />
                </Grid>
                <Grid item padding="0px" xs={4}>
                    <HomePageCard 
                        image={camille1}
                        title="Meat"
                        text="Cured and uncured we have an exquisite selection"
                    />
                </Grid>
                <Grid item padding="0px" xs={4}>
                    <HomePageCard 
                        image={veggie}
                        title="Vegetables"
                        text="Seasonal vegetables that offer a splash of color to all of our boards"
                    />
                </Grid>
            </Grid>
        
    )
}

export default HomePageGrid;
