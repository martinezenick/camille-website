import classes from './ContactForm.module.css';
import Input from './UI/Input';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const ContactForm = props => {
    return(
        <form className={classes.form}>
            <Grid container spacing={2}>
                <Grid item padding="7px" xs={6}>
                    <TextField 
                fullWidth
                required
                label="First Name"
                variant="outlined"
                id="firstName"
            />
                </Grid>
                <Grid item padding="7px" xs={6}>
                <TextField 
                fullWidth
                required
                label="Last Name"
                variant="outlined"
                id="lastName"
            />
                </Grid>
                <Grid item padding="7px" xs={12}>
                <TextField 
                fullWidth
                required
                label="Email Address"
                variant="outlined"
                id="emailAddress"
            />
                </Grid>
                <Grid item padding="7px" xs={12}>
                <TextField 
                required
                multiline
                fullWidth
                label="Notes"
                id="Notes"
                rows={4}
            />
                </Grid>
            </Grid>
            <Grid item padding="7px" textAlign="center" xs={12}>
                <Button variant="contained">Submit</Button>
            </Grid>
        </form>
    );

};

export default ContactForm;