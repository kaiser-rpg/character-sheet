import React from "react";
import CharacteristicRow from "./CharacteristicRow";

export default class CharacteristicTable extends React.Component {
    render() {
        return (
            <div>
                <h3>Characteristics</h3>
                <table>
                    <tbody>
                    <CharacteristicRow charEntry={this.props.characteristics.strength}/>
                    <CharacteristicRow charEntry={this.props.characteristics.constitution}/>
                    <CharacteristicRow charEntry={this.props.characteristics.dexterity}/>
                    <CharacteristicRow charEntry={this.props.characteristics.agility}/>
                    <CharacteristicRow charEntry={this.props.characteristics.perception}/>
                    <CharacteristicRow charEntry={this.props.characteristics.aptitude}/>
                    <CharacteristicRow charEntry={this.props.characteristics.focus}/>
                    <CharacteristicRow charEntry={this.props.characteristics.willpower}/>
                    </tbody>
                </table>
            </div>
        )
    }
}