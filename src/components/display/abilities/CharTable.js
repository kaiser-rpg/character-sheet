import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from "react-redux";
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import {toTitleCase} from "../../../util/StringHelper";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: theme.spacing(1),
    },
    table: {
    },
}));

const CharTable = ({width}) => {
    const classes = useStyles();
    const str = useSelector(state => state.present.characteristics.strength);
    const con = useSelector(state => state.present.characteristics.constitution);
    const dex = useSelector(state => state.present.characteristics.dexterity);
    const agi = useSelector(state => state.present.characteristics.agility);
    const per = useSelector(state => state.present.characteristics.perception);
    const apt = useSelector(state => state.present.characteristics.aptitude);
    const foc = useSelector(state => state.present.characteristics.focus);
    const wp = useSelector(state => state.present.characteristics.willpower);

    const makeRow = (char) => {
        return (
            <TableRow key={char.title}>
                <TableCell component="th" scope="row">
                    {isWidthUp('md', width) ? char.title : toTitleCase(char.shortName)}
                </TableCell>
                <TableCell align="center">{char.permanentTotal}</TableCell>
                <TableCell align="center">{char.permanentModifier}</TableCell>
            </TableRow>
        )
    };


    return (
        <Paper className={classes.root}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>{width}</TableCell>
                        <TableCell align="center">Total</TableCell>
                        <TableCell align="center">Mod</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {makeRow(str)}
                    {makeRow(con)}
                    {makeRow(dex)}
                    {makeRow(agi)}
                    {makeRow(per)}
                    {makeRow(apt)}
                    {makeRow(foc)}
                    {makeRow(wp)}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default withWidth()(CharTable);