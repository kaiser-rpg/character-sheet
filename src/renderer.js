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




