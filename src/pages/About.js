import Board from '../components/Boards/Board';
import Grid from '@mui/material/Grid';
import AboutMe from '../pics/AboutMe.jpg';
import './About.css';

const About = () => {
    return(
        <div>
        <h3>About Camille's Powerhouse Charcuterie</h3>
        <Grid container justifyContent="center" spacing={8}>
        <Grid item xs={12} sm container>
            <Grid item xs={8}>
                <img src={AboutMe} className="board_img"/>
            </Grid>
                <Grid item xs textAlign="center">
            <p className="about_text">Hello! Camille is the owner, founder, and head chef of Camille (and Nick's) Powerhouse Charcutterie.
                She's from Winter Park, Florida where she grew up with her parents and two older siblings. 
            </p>
            <p className="about_text">
                From a very early age she was into horses, so is it really any surprise now that she makes beautiful charcutterie boards?
                I think not. In high school she was unanimously voted homecoming queen which for some might have been their peak. For her, its not even close.
                She went on to get a bachelors degree in Psychology and a Masters in Social Innovation and is one of the most intelligent people you will meet (though I still think her crossword time's are usually slower than mine).
            </p>
            <p className="about_text">    
            Now a days, when she's not producing incredible charcuterie boards she works as an adventure travel leader where she leads hiking and biking tours all over the world with the company backroads.
            </p>
            <p className="about_text"> 
                Anybody who has spent any time with her knows if there is anything more incredbile than her charcutterie boards it is her personality.
                She is one of the funniest (probably should have been the one to write this, the jokes would've been waaay better), kindest, and warmest people you could ever spend time with.
                She has this inate ability to make you feel welcomed, to feel accepted, to feel loved and to feel hopeful. She has the most perfect smile and wonderful laught.
                You should consider yourself blessed if you get to enjoy a salami rose that she crafted with her perfect dainty little hands.
            </p>
            </Grid>
        </Grid> 

     </Grid>

        

        </div>
        
    );
};

export default About;