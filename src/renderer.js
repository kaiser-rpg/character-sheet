import React from 'react'
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/App";
import {store} from "./reducers";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';


const fs = window.require('fs');
// fs.readFile('data/kara.json', loadCharacterData);

// store.subscribe(() =>
// );

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 200,
            sm: 400,
            md: 600,
            lg: 800,
            xl: 1000,
        }
    },
    typography: {
        body1: {
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            fontSize: "1rem",
            fontWeight: 400,
            letterSpacing: "0.00938em",
            lineHeight: 1.5,
        },
        body2: {
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.01071em",
            lineHeight: 1.43,
        }
    }

});


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <App/>
        </Provider>
    </MuiThemeProvider>
    , document.getElementById('app')
);

