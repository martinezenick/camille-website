import './Boards.css';
import BoardItem from '../ShopGrid/ShopGridItem';
import Grid from '@mui/material/Grid';
import board1 from '../../pics/board1.jpeg';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

import board2 from '../../pics/board2.jpeg';
import board3 from '../../pics/board4.jpeg';
import breakfast from '../../pics/breakfast.jpeg';
import cheese from '../../pics/Cheese.JPG';
import camille1 from '../../pics/camille_board1.jpg';
import camille2 from '../../pics/camille2.jpg';




const Board = (props) => {

    const boards = [
    {
        boardName: "Breakfast Board",
        boardPrice: "$45.00",
        boardDescription: "Who doesn't love breakfast? Nuff said.",
        boardFilling: "This board comes with 30 fluffy, round, cloudlike pancakes for you to dip in a smattering of the highest quality peanut butter, nutella, and maple syrup. We will also throw in a collection of our favorite fruits to make this the most memorable sunday brunch.",
        boardimage: breakfast
    },
    {
        boardName: "Cheese Board",
        boardPrice: "$50.00",
        boardDescription: "Do you make jokes like what do call a fish with no eyes? Fsh. Or use pick up lines like Do you like raisins? Well how do you feel about a date? Then this you might be a little cheesy and this is the board for you.",
        boardFilling: "This board comes with 5 different types of cheese. Brie, Havarti and Parmesan are included on everyboard because duh they rock. Our dedicated team of cheese taking experts will then choose two of this season's most fashionable cheeses. We will also include 3 different types of tastfully prepared crackers, artisinal jam, and a dollop of honey which will help create a symphony of flavors in your mouth.",
        boardimage: cheese
    },
    {
        boardName: "Cheese & Charcuterie Board",
        boardPrice: "$75.00",
        boardDescription: "The OG. This board has been keeping it real since it was invented by the French in the 15th century. This board defined cool. If this board could speak it woulnd't say anything because it speaks for itself. You feel me?",
        boardFilling: "This board packs a punch. 4 meats. 2 types of prosciutto. 1 of our world renowned salami roses. 5 cheeses. Brie, Cheddar, Parmesan, and 2 other hand selected surprise cheeses. 3 types of crackers. And could you really call it a charcuterie board if there wasn't also artisinal honey & jam? Probably not, unless you were an idiot.",
        boardimage: camille1
    },
    {
        boardName: "Crudités Board",
        boardPrice: "$40.00",
        boardDescription: "Ever heard of Crudités? Me either. I had to google translate and it basically means tasty as f**k vegatables arranged on a beautiful board. I think we absolutely nailed it.",
        boardFilling: "This ménage à trois of local Orlando vegetables, hummus and pita should have your foaming at the mouth. Our team of vegans has dedicated their life to saving the world one crudités board at a time.",
        boardimage: board1
    },
    {
        boardName: "Charcuterie Board",
        boardPrice: "$60.00",
        boardDescription: "Forget all that other bulls**t. I'm here for the meats!! Well rest assured brother. We've got you covered.",
        boardFilling: "6 different meats. Read that again. 6. Different. Meats. We've got prosciutto. We've got salami. We've got sausage. We've also got an assortment of cured meats that will blow your mind. We've also included an assortment of crackers, veggies and a seasonal dip because you should probably eat some of those too.",
        boardimage: camille2
    },
    {
        boardName: "Dessert Board",
        boardPrice: "$50.00",
        boardDescription: "Forget the rest of them. This is the board you really want. This is the board that we really want. This is the holy grail of charcuterie boards. Your welcome.",
        boardFilling: "Milk Chocalate. Dark Chocolate. Marshmellows. Chocolate fondue. Cookies. Fruit. * Mic Drop *",
        boardimage: board3
    }
    ];
    
    const params = useParams();

    const selectedBoard = boards.filter(board => board.boardName == params.boardName);
    if (selectedBoard.length === 0){
        return <h2>Incorrect Selection</h2>
    };

    console.log(selectedBoard)

    return(
        <Grid container justifyContent="center" spacing={4}>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs textAlign="left">
                    <h2>{params.boardName}</h2>
                    <h3>{selectedBoard[0].boardPrice}</h3>
                    <p>{selectedBoard[0].boardDescription}</p>
                    <h3>What's in it?</h3>
                    <p>{selectedBoard[0].boardFilling}</p>
                    </Grid>
                </Grid>
            </Grid> 
            <Grid item xs={8}>
                <img src={selectedBoard[0].boardimage} className="board_img"/>
            </Grid>
        </Grid>
    );
}

export default Board;