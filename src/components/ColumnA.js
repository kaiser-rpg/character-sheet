import React from 'react'
import CharacteristicTable from "./CharacteristicTable";
import SkillTable from "./SkillTable";
import GeneralGroup from "./GeneralGroup";

export default class ColumnA extends React.Component {
    render() {
        let {abilities, skills, characteristics} = this.props.sheet;
        return (
            <div className="column2">
                <h1>
                    {this.props.sheet.info.name}
                </h1>
                <GeneralGroup generalAbilities={abilities.generalAbilities}/>
                <CharacteristicTable characteristics={characteristics}/>
                <SkillTable skillGroups={skills.primarySkills}/>
                <SkillTable skillGroups={skills.secondarySkills}/>
            </div>
        )
    }
}