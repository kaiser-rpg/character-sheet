import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from '@material-ui/core/styles';
import {setCharacterName, setHeritagePrime, setHeritageSecondary} from "../actions/info-actions";
import {useDispatch, useSelector} from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";

const usesStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        // margin: 3,
    },
    textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        width: '100%',
        // minWidth: 200
    },
    textFieldSelect: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        width: '50%',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: '100%',
        // minWidth: 200

    },
}));

const InfoGroup = () => {
    const classes = usesStyles();
    const dispatch = useDispatch();
    const name = useSelector(state => state.present.info.name);
    const heritageA = useSelector(state => state.present.info.heritagePrime);
    const heritageB = useSelector(state => state.present.info.heritageSecondary);


    return (
        <Paper square className={classes.paper}>
            <Grid className={classes.container} container spacing={1}>
                <Grid item xs={8}>
                    <TextField
                        id="character-name"
                        label="Character Name"
                        onChange={event => dispatch(setCharacterName(event.target.value))}
                        value={name}
                        className={classes.textField}
                        placeholder="Name"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        id="character-gender"
                        label="Gender"
                        className={classes.textField}
                        margin="normal"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        id="character-age"
                        label="Age"
                        className={classes.textField}
                        margin="normal"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="heritage-prime"
                        select
                        label="Heritage"
                        className={classes.textFieldSelect}
                        value={heritageA}
                        onChange={event => dispatch(setHeritagePrime(event.target.value))}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
                    >
                        <MenuItem value="human">Human</MenuItem>
                        <MenuItem value="haruw">Haruw</MenuItem>
                        <MenuItem value="baset">Baset</MenuItem>
                    </TextField>
                    <TextField
                        id="heritage-secondary"
                        select
                        label="Mixed"
                        className={classes.textFieldSelect}
                        value={heritageB}
                        onChange={event => dispatch(setHeritageSecondary(event.target.value))}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="human">Human</MenuItem>
                        <MenuItem value="haruw">Haruw</MenuItem>
                        <MenuItem value="baset">Baset</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        id="character-class"
                        label="Class"
                        className={classes.textField}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        id="character-class"
                        label="Level"
                        type="number"
                        className={classes.textField}
                        margin="normal"
                    />
                </Grid>

            </Grid>
        </Paper>
    )
};

export default InfoGroup


