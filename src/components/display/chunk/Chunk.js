import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SpellChunk from "./SpellChunk";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: theme.spacing(1),
    },
    table: {},
}));

const Chunk = ({type, subtype, name, ...props}) => {
    const classes = useStyles();

    const [data, setData] = useState({});
    useEffect(() => {

    });

    let displayChunk;

    switch (type) {
        case "martial-art":
            break;
        case "spell":
            displayChunk = <SpellChunk name={name}/>;
            break;
        case "phenom":
            break;
    }

    return (
        <Paper className={classes.root}>
            {displayChunk}
        </Paper>
    );
};

export default Chunk;