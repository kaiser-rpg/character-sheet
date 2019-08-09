import React from "react";

export default class CharacteristicRow extends React.Component {
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