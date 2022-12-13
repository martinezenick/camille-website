import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import './Footer.css';


const MainFooter = () => {
    return(
        <footer>
            <Stack direction="column" alignItems="center" spacing={2}>
            <Button variant="outlined" color="primary">Email Us</Button>
            <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton className="icon" aria-label="upload picture" component="label">
                    <InstagramIcon />
                </IconButton>
                <IconButton className="icon" aria-label="upload picture" component="label">
                    <LibraryMusicIcon />
                </IconButton>
                </Stack>
            <p>Winter Park, FL 32789</p>
            </Stack>
        </footer>
    );
};

export default MainFooter;