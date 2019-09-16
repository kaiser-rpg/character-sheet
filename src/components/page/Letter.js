import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    pageBackground: {
        background: "very light gray",
        width: "8.5in",
        length: "11.0"
    },
    pagePreview: {
        background: "white",
        margin: "0 auto",
        marginBottom: "16px",
        boxShadow: "0 0 8px black"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Letter = () => {
    const classes = useStyles();

    return (
        <div className={classes.pageBackground}>
            <div className={classes.pagePreview}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Paper square className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper square className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper square className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper square className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper square className={classes.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Letter;