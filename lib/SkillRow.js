import React from 'react'

export default class SkillRow extends React.Component {
    render() {
        return (
            <tr style={styles.row}>
                <td className='skill-row-name'>
                    {this.props.skill.title}
                </td>
                <td className='skill-row-final'>
                    {this.props.skill.permanentTotal}
                </td>
                <td>
                    =
                </td>
                <td className='skill-row-base'>
                    {this.props.skill.base}
                </td>
                <td>
                    +
                </td>
                <td className='skill-row-modifier'>
                    {this.props.skill.modifier}
                </td>
                <td>
                    +
                </td>
                <td className='skill-row-innate'>
                    {this.props.skill.innate}
                </td>
                <td>
                    +
                </td>
                <td className='skill-row-natural'>
                    {this.props.skill.natural}
                </td>
                <td>
                    [{this.props.skill.devCost}/{this.props.skill.xpCost}]
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