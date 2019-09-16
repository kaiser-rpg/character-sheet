import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Letter from "./page/Letter";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Letter/>
        </div>
    )
};

export default App
