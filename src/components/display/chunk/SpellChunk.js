import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: theme.spacing(1),
    },
    table: {},
}));

export default ({type, ...props}) => {
    const [spell, setSpell] = useState({});

    switch (type) {
        case "path":
            return <PathChunk {...props} />;
        case "slot":
        default:
            return <Typography variant="body2">
                Unknown Type: '{type}'
            </Typography>;
    }
};

const SlotChunk = () => {

};

const PathChunk = ({name, level, power, action, maintTime, tags, flavor, description, degree, ...props}) => {
    const classes = useStyles();
    const {base, intermediate, advanced, arcane} = degree;

    const renderDegree = (dd) => {
        const {mana, int, maint, effect} = dd;
        return (
            <TableRow>
                <TableCell>
                    {mana + maint > 0 ? (" (" + maint + ")") : ""}
                </TableCell>
                <TableCell>
                    {int}
                </TableCell>
                <TableCell>
                    {effect}
                </TableCell>
            </TableRow>
        )
    };

    let spellChunk;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h3">
                    {name}
                </Typography>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography variant="body2">
                            Power: {power}
                        </Typography>
                        <Typography variant="body2">
                            Action: {action}
                        </Typography>
                        <Typography variant="body2">
                            Maintain: {maintTime}
                        </Typography>
                    </Grid>
                    <Grid item>
                        {description}
                    </Grid>
                    <Grid item>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Mana Cost
                                    </TableCell>
                                    <TableCell>
                                        Apt Req
                                    </TableCell>
                                    <TableCell>
                                        Effect
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {renderDegree(base)}
                                {renderDegree(intermediate)}
                                {renderDegree(advanced)}
                                {renderDegree(arcane)}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">{level}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}