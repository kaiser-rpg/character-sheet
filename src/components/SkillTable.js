import React from 'react'
import SkillModal from "./modal/SkillModal";

export default class SkillTable extends React.Component {
    render() {
        console.log(this.props)
        let groupRenders = this.props.skillGroups.map((group) => {
            return <SkillGroupBody key={group[0].group} skillGroup={group}/>
        });

        return (
            <div>
                <h3>{this.props.skillGroups.name} Skills</h3>
                <table className="skill-table">
                    {groupRenders}
                </table>
            </div>
        )
    }
}

class SkillGroupBody extends React.Component {

    render() {
        let groupName = this.props.skillGroup[0].group
        // let devCost = this.props.skillGroup.reduce((max, curr) => Math.max(max, curr));
        const skillRender = this.props.skillGroup.map((skill) =>
            <SkillRow key={skill.name} skill={skill}/>
        );

        return (
            <tbody className="skill-body">
            <tr className='skill-row'>
                <td className="skill-group-name">
                    {groupName}
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
                    Fact
                </td>
            </tr>
            {skillRender}
            </tbody>
        )
    }
}

class SkillRow extends React.Component {
    render() {
        let skill = this.props.skill;
        return (
            <tr className='skill-row' key={skill.name}>
                <td className='skill-row-name'>
                    {skill.title}
                </td>
                <td className='skill-row-final'>
                    {skill.permanentTotal}
                </td>
                <td>
                    =
                </td>
                <td className='skill-row-base'>
                    {skill.base}
                </td>
                <td>
                    +
                </td>
                <td className='skill-row-modifier'>
                    {skill.charModifier}
                </td>
                <td>
                    +
                </td>
                <td className='skill-row-factor'>
                    {skill.factors.permanent}
                </td>
                <td className='skill-row-xp-cost'>
                    [{skill.cost}]
                </td>
                <td className='skill-row-dev-cost'>
                    {skill.devCost}
                </td>
                <td>
                    <SkillModal skill={skill}/>
                </td>
            </tr>
        )
    }
}