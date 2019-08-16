import React from 'react'
import {presentSheet, sheet} from "./reducers/SheetApp";
import * as ReactDOM from "react-dom";
import loadCharacterData from "./util/loader";
import ColumnLeft from "./components/ColumnLeft";
import ColumnRight from "./components/ColumnRight";
import Modal from "react-modal";
import GeneralGroup from "./components/GeneralGroup";


const fs = window.require('fs');

Modal.setAppElement(document.getElementById('app'));

sheet.subscribe(() => ReactDOM.render(<App sheet={presentSheet()}/>, document.getElementById('app')));


fs.readFile('data/kara.json', loadCharacterData);

class App extends React.Component {
    render() {
        let { abilities, skills, characteristics } = this.props.sheet;
        return (
            <div >
                <div className="container">
                    <h1>
                        {this.props.sheet.info.name} &ndash; {this.props.sheet.info.currentLevel}
                    </h1>
                    <GeneralGroup generalAbilities={abilities.generalAbilities} />
                </div>
                <div className="container">
                    <ColumnLeft sheet={this.props.sheet} />
                    <ColumnRight sheet={this.props.sheet} />
                </div>
            </div>
        )
    }
}


