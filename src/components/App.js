import React from "react";
import SearchAppBar from "./nav/SearchAppBar";
import MainPageGrid from "./display/MainPageGrid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <div>
            <SearchAppBar/>
            <MainPageGrid/>
        </div>
    )
};

export default App
