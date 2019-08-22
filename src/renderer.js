import React from 'react'
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/App";
import {store} from "./reducers";


const fs = window.require('fs');
// fs.readFile('data/kara.json', loadCharacterData);

// store.subscribe(() =>
// );


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app')
)

// store.dispatch(setCharacterName("Luara"));




