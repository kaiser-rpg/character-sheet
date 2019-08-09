// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react'
import SkillTable from "../lib/SkillTable";
import {presentSheet, sheet} from "./reducers/SheetApp";
import CharacteristicTable from "../lib/CharacteristicTable";
import * as ReactDOM from "react-dom";
import loadCharacterData from "./util/loader";

const fs = window.require('fs');

sheet.subscribe(() => ReactDOM.render(<App sheet={presentSheet}/>, document.getElementById('app')));


fs.readFile('data/kara.json', loadCharacterData);

class App extends React.Component {
    render() {
        return (
            <div className="row">
                <h1>
                    {this.props.sheet.info.name}
                </h1>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            Life Points
                        </td>
                        <td>
                            {this.props.sheet.abilities.generalAbilities.lifePoints.total}
                        </td>
                        <td>
                            Initiative
                        </td>
                        <td>
                            {this.props.sheet.skills.initiative.total}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Ki Reserve
                        </td>
                        <td>
                            {this.props.sheet.abilities.martialAbilities.kiReserve.total}
                        </td>
                        <td>
                            SK
                        </td>
                        <td>
                            {this.props.sheet.abilities.martialAbilities.spiritKnowledge.unused}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Mana Pool
                        </td>
                        <td>
                            {this.props.sheet.abilities.magicAbilities.manaPool.total}
                        </td>
                        <td>
                            MK
                        </td>
                        <td>
                            {this.props.sheet.abilities.magicAbilities.manaKnowledge.unused}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phenom Stock
                        </td>
                        <td>
                            {this.props.sheet.abilities.manifestAbilities.phenomStock.total}
                        </td>
                        <td>
                            PK
                        </td>
                        <td>
                            {this.props.sheet.abilities.manifestAbilities.phenomKnowledge.unused}
                        </td>
                    </tr>
                    </tbody>
                </table>
                {/*<ColumnA/>*/}
                {/*<ColumnB/>*/}
                <CharacteristicTable characteristics={this.props.sheet.characteristics}/>
                <SkillTable skillGroups={this.props.sheet.skills.primarySkills}/>
                <SkillTable skillGroups={this.props.sheet.skills.secondarySkills}/>
            </div>
        )
    }
}


