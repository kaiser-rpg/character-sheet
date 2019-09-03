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
    table: {
    },
}));

const ResistanceCard = () => {
    const classes = useStyles();
    const prr = useSelector(state => state.present.abilities.generalAbilities.presence);
    const phr = useSelector(state => state.present.abilities.generalAbilities.physicalResistance);
    const ir = useSelector(state => state.present.abilities.generalAbilities.immuneResistance);
    const sr = useSelector(state => state.present.abilities.generalAbilities.spiritResistance);
    const mr = useSelector(state => state.present.abilities.generalAbilities.mentalResistance);

    const makePresenceRow = (prr) => {
        return (
            <TableRow key={prr.title}>
                <TableCell component="th" scope="row">
                    {prr.title}
                </TableCell>
                <TableCell align="center">{prr.total}</TableCell>
            </TableRow>
        )
    };

    const makeResistRow = (resist) => {
        return (
            <TableRow key={resist.shortName}>
                <TableCell component="th" scope="row">
                    {resist.shortName}
                </TableCell>
                <TableCell align="center">{resist.total}</TableCell>
            </TableRow>
        )
    };

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {makePresenceRow(prr)}
                    {makeResistRow(phr)}
                    {makeResistRow(ir)}
                    {makeResistRow(sr)}
                    {makeResistRow(mr)}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default ResistanceCard;