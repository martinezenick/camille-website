import Grid from '@mui/material/Grid';
import ShopGridItem from './ShopGridItem';

import board1 from '../../pics/board1.jpeg';
import board2 from '../../pics/board2.jpeg';
import board3 from '../../pics/board4.jpeg';
import breakfast from '../../pics/breakfast.jpeg';
import cheese from '../../pics/Cheese.JPG';
import camille1 from '../../pics/camille_board1.jpg';
import camille2 from '../../pics/camille2.jpg';
import veggie from '../../pics/veggie.jpeg';

const ShopGrid = props => {
    return(
            <Grid container justifyContent="center" spacing={3}>
                <Grid item padding="0px" xs={4}>
                    <ShopGridItem 
                        image={camille1}
                        text="Cheese & Charcuterie Board"
                    />
                </Grid>
                <Grid item padding="0px" xs={4}>
                    <ShopGridItem 
                        image={camille2}
                        text="Charcuterie Board"
                    />
                </Grid>
                <Grid item padding="0px" xs={4}>
                    <ShopGridItem 
                        image={cheese}
                        text="Cheese Board"
                    />
                </Grid>
                <Grid item padding="0px" xs={4}>
                    <ShopGridItem 
                        image={veggie}
                        text="Crudités Board"
                    />
                </Grid>
                <Grid item padding="0px" xs={4}>
                    <ShopGridItem 
                        image={breakfast}
                        text="Breakfast Board"
                    />
                </Grid>
                <Grid item padding="0px" xs={4}>
                    <ShopGridItem 
                        image={board3}
                        text="Dessert Board"
                    />
                </Grid>
            </Grid>
        
    )
}

export default ShopGrid;
