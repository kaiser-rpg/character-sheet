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
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 200,
    },
}));

const ResistanceTable = () => {
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
            <TableRow key={resist.title}>
                <TableCell component="th" scope="row">
                    {resist.title}
                </TableCell>
                <TableCell align="center">{resist.total}</TableCell>
                <TableCell align="center">=</TableCell>
                <TableCell align="center">{resist.base}</TableCell>
                <TableCell align="center">{resist.charModifier}</TableCell>
                <TableCell align="center">{resist.factors.permanent}</TableCell>
                <TableCell align="center">{resist.factors.temporary}</TableCell>
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
                        <TableCell align="center"/>
                        <TableCell align="center">Base</TableCell>
                        <TableCell align="center">Mod</TableCell>
                        <TableCell align="center">Perm</TableCell>
                        <TableCell align="center">Temp</TableCell>
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

export default ResistanceTable;