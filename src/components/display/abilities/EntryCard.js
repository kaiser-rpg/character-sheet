import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from "@material-ui/core/Card";
import {CardHeader} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import TableFooter from "@material-ui/core/TableFooter";

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
    remainder: {
        height: 100
    }
}));

const EntryCard = ({entry, addBody, addFooter, noBase, noBonus, noRemainder}) => {
    const classes = useStyles();

    const body = (
        <TableBody>
            {!noBase && entry.hasOwnProperty("base") ?
                <TableRow>
                    <TableCell>Base</TableCell>
                    <TableCell>{entry.base}</TableCell>
                </TableRow>
                : null}
            {!noBonus && entry.hasOwnProperty("factors") ?
                <TableRow>
                    <TableCell>Bonus</TableCell>
                    <TableCell>{entry.factors.total}</TableCell>
                </TableRow>
                : null}
        </TableBody>
    );

    const foot = (
        <TableFooter>
            {!noRemainder && entry.hasOwnProperty("currentTotal") ?
                <TableRow className={classes.remainder}>
                    <TableCell colSpan={2}>{entry.currentTotal}</TableCell>
                </TableRow>
                : null}
        </TableFooter>
    );


    return (
        <Card className={classes.root}>
            <CardHeader
                titleTypographyProps={{variant: 'caption'}}
                title={entry.title}
            />

            <CardContent>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Total
                            </TableCell>
                            <TableCell>
                                {entry.total}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {addBody ? body : null}
                    {addFooter ? foot : null}
                </Table>
            </CardContent>
        </Card>
    );
};

export default EntryCard;