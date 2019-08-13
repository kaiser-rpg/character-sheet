import React from "react";

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

class CharacteristicRow extends React.Component {
    render() {
        return (
            <tr style={styles.row}>
                <td className='char-row-name'>
                    {this.props.charEntry.name}
                </td>
                <td className='char-row-total'>
                    {this.props.charEntry.total}
                </td>
                <td className='char-row-mod'>
                    {(this.props.charEntry.modifier < 0 ? "" : "+") + this.props.charEntry.modifier}
                </td>
            </tr>
        )
    }
}

const styles = {
    row: {
        outline: 'solid black'
    }
}