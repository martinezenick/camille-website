import Button from '@mui/material/Button';
import ImageGallery from '../components/ImageGallery';
import './Home.css';
import Grid from '@mui/material/Grid';

import HomePageGrid from '../components/HomePageGrid/HomePageGrid';


import board1 from '../pics/board1.jpeg';
import board2 from '../pics/board2.jpeg';
import board3 from '../pics/board1.jpeg';
import board4 from '../pics/board4.jpeg';
import board5 from '../pics/board5.jpeg';
import board6 from '../pics/board6.jpeg';
import board7 from '../pics/board7.jpeg';
import board8 from '../pics/board8.jpeg';

import picnic1 from '../pics/picnic1.jpg';
import picnic2 from '../pics/picnic2.jpg';
import picnic3 from '../pics/picnic3.jpg';
import picnic4 from '../pics/picnic4.jpg';
import camille1 from '../pics/camille_board1.jpg';
import cheese from '../pics/Cheese.JPG';
import milly1 from '../pics/Milly.JPG';
import milly2 from '../pics/Milly2.JPG';
import milly3 from '../pics/Milly3.JPG';
import milly4 from '../pics/Milly4.jpg';



import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <ImageGallery 
                board1 = {picnic1}
                board2 = {picnic2} 
                board3 = {camille1}
                board4 = {picnic4}
                settings = {{
                    slidesToShow: 2
                }}
            />
            <div className = "home-content">
                <h2>BRING SOME COLORS TO YOUR TABLE THIS HOLIDAY SEASON.</h2>
                <h3>The perfect way to elevate your next occasion. Charcuterie boards are the best way to let your friends know
                    that you are just that much classier than they are. Even better, nobody has to know you bought it.
                </h3>
                <h3>
                    All boards are handcrafted and designed by your favorite winter park celebrity, Camille Lyden. Here's a few pictures of her being her natural stunning & dazzling self.
                </h3>
            </div>
            <ImageGallery 
                board1 = {milly1}
                board2 = {milly2} 
                board3 = {milly3}
                board4 = {milly4}
                settings = {{
                    centerMode: true,
                    slidesToShow: 3
                }}
            />
            <div className ="home-shopnow">
                <Link to= "/shop" className="nav-class">
                    <Button className="first-button"> - SHOP NOW - </Button>
                </Link>
                
            </div>
            <HomePageGrid />
            
            <div>
            <Button variant="outlined"> Set the Vibe with Spotify </Button>
            </div>
        </div>
    );
};

export default Home;