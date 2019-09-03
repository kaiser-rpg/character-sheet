import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: theme.spacing(1),
    },
    table: {},
}));

const MovementCard = (props = {movement: "ground"}) => {
    const classes = useStyles();
    let movement;

    switch (props.movement) {
        case "flight":
            movement = useSelector(state => state.present.abilities.generalAbilities.flightMovement);
            break;
        case "swim":
            movement = useSelector(state => state.present.abilities.generalAbilities.swimMovement);
            break;
        case "burrow":
            movement = useSelector(state => state.present.abilities.generalAbilities.burrowMovement);
            break;
        case "ground":
        default:
            movement = useSelector(state => state.present.abilities.generalAbilities.groundMovement);
    }

    const extra = (
        <TableBody>
            <TableRow>
                <TableCell colSpan={3}>Base</TableCell>
                <TableCell colSpan={3}>{movement.base}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={3}>Bonus</TableCell>
                <TableCell colSpan={3}>{movement.factors.total}</TableCell>
            </TableRow>
        </TableBody>
    );


    return (
        <Paper className={classes.root}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={6}>{movement.title}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={4}>Total</TableCell>
                        <TableCell colSpan={2}>{movement.total}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Dash</TableCell>
                        <TableCell colSpan={2}>Run</TableCell>
                        <TableCell colSpan={2}>Sprint</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>{movement.dash}m</TableCell>
                        <TableCell colSpan={2}>{movement.run}m</TableCell>
                        <TableCell colSpan={2}>{movement.sprint}m</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
};

export default MovementCard;