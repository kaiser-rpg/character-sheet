import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        overflowX: 'auto',
        marginTop: theme.spacing(1),
    },
    table: {
        height: '100%'
    },
    remain: {
        height: '100%'
    },
    icon: {
        margin: theme.spacing(1),
        fontSize: 32,
    },
}));

const StaminaTable = () => {
    const classes = useStyles();
    let stamina = useSelector(state => state.present.abilities.generalAbilities.stamina);

    const extra = (
        <TableBody>
            <TableRow>
                <TableCell>Base</TableCell>
                <TableCell>{stamina.base}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Bonus</TableCell>
                <TableCell>{stamina.factors.total}</TableCell>
            </TableRow>
        </TableBody>
    );


    return (
        <Paper className={classes.root}>

            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={3}>
                            {stamina.title}
                        </TableCell>
                        <TableCell>
                            {stamina.total}
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>

            <Card>
                {/*<CardHeader title="Remaining" />*/}
                <CardContent/>
            </Card>

        </Paper>
    );
};

export default StaminaTable;