import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import {useDispatch, useSelector} from "react-redux";
import {setHeritagePrime, setHeritageSecondary} from "../../actions/info-actions";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    },
    displayLabel: Object.assign({}, theme.typography.textField, {
        padding: theme.spacing(1)
    })
}));

const HeritageSelect = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const heritage = useSelector(state => state.present.info.heritageLabel);
    const heritageA = useSelector(state => state.present.info.heritagePrime);
    const heritageB = useSelector(state => state.present.info.heritageSecondary);
    let [openModal, toggleModal] = useState(false);

    return (
        <div>
            <Button onClick={() => toggleModal(true)}>
                <TextField
                    disabled
                    id="standard-name"
                    label="Heritage"
                    className={classes.textField}
                    value={heritage}
                    margin="normal"
                />
            </Button>
            <Dialog open={openModal} onClose={() => toggleModal(false)}>
                <DialogTitle>Select Heritage</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="heritage-prime">Heritage</InputLabel>
                            <Select
                                value={heritageA}
                                onChange={event => dispatch(setHeritagePrime(event.target.value))}
                                input={<Input id="heritage-prime"/>}
                            >
                                <MenuItem value="human">Human</MenuItem>
                                <MenuItem value="haruw">Haruw</MenuItem>
                                <MenuItem value="baset">Baset</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="heritage-secondary">Mixed</InputLabel>
                            <Select
                                value={heritageB}
                                onChange={event => dispatch(setHeritageSecondary(event.target.value))}
                                input={<Input id="heritage-secondary"/>}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="human">Human</MenuItem>
                                <MenuItem value="haruw">Haruw</MenuItem>
                                <MenuItem value="baset">Baset</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => toggleModal(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => toggleModal(false)} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default HeritageSelect;
