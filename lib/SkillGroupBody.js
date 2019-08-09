import React from 'react'
import SkillRow from "./SkillRow";

export default class SkillGroupBody extends React.Component {

    render() {
        // let arr = [];
        // for(let skill in this.props.skillGroup){
        //     arr.push(
        //         <SkillRow key={skill} skill={this.props.skillGroup[skill]}/>
        //     )
        // }
        const skillRender = this.props.skillGroup.map((skill) =>
            <SkillRow key={skill.name} skill={skill}/>
        );

        return (
            <tbody>
            <tr>
                <td colSpan={8}>
                    <b>{this.props.skillGroup.name}</b>
                </td>
            </tr>
            <tr>
                <td>
                    Name
                </td>
                <td colSpan={2}>
                    Final
                </td>
                <td colSpan={2}>
                    Base
                </td>
                <td colSpan={2}>
                    Mod
                </td>
                <td colSpan={2}>
                    Innate
                </td>
                <td colSpan={2}>
                    Natural
                </td>
            </tr>
            {skillRender}
            </tbody>
        )
    }
}

const styles = {
    row: {
        outline: 'solid black'
    }
}