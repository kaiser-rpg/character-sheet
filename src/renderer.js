// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react'
import {presentSheet, sheet} from "./reducers/SheetApp";
import * as ReactDOM from "react-dom";
import loadCharacterData from "./util/loader";
import ColumnA from "./components/ColumnA";
import Modal from "react-modal";

const fs = window.require('fs');

Modal.setAppElement(document.getElementById('app'));

sheet.subscribe(() => ReactDOM.render(<App sheet={presentSheet}/>, document.getElementById('app')));


fs.readFile('data/kara.json', loadCharacterData);

class App extends React.Component {
    render() {
        return (
            <div className="row">
                <ColumnA sheet={this.props.sheet}/>
            </div>
        )
    }
}


