import React from 'react'
import SkillModal from "./SkillModal";

export default class SkillTable extends React.Component {
    render() {
        // let arr = [];
        // for(let i in this.props.skillGroups){
        //     if(!this.props.skillGroups.hasOwnProperty(i)) continue;
        //     let group = this.props.skillGroups[i];
        //     console.log(group);
        //     arr.push(
        //         <SkillGroupBody key={group.group + "." + group.name} skillGroup={group}/>
        //     )
        // }

        let groupRenders = this.props.skillGroups.map((group) => {
            return <SkillGroupBody key={group[0].group} skillGroup={group}/>
        });

        return (
            <div>
                <h3>{this.props.skillGroups.name} Skills</h3>
                <table style={styles.table}>
                    {groupRenders}
                </table>
            </div>
        )
    }
}

class SkillGroupBody extends React.Component {

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

class SkillRow extends React.Component {
    render() {
        let skill = this.props.skill;
        return (
            <tr style={styles.row}>
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
                    {skill.modifier}
                </td>
                <td>
                    +
                </td>
                <td className='skill-row-innate'>
                    {skill.innate}
                </td>
                <td>
                    +
                </td>
                <td className='skill-row-natural'>
                    {skill.natural}
                </td>
                <td>
                    [{skill.devCost}/{skill.xpCost}]
                </td>
                <td>
                    <SkillModal skill={skill}/>
                </td>
            </tr>
        )
    }
}

const styles = {
    table: {},
    row: {
        outline: 'solid black'
    }
};