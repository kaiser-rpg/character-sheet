import React from 'react'
import CharacteristicTable from "./CharacteristicTable";
import SkillTable from "./SkillTable";
import GeneralGroup from "./GeneralGroup";

export default class ColumnLeft extends React.Component {
    render() {
        let {abilities, skills, characteristics} = this.props.sheet;
        return (
            <div className="column-66-left">
                <CharacteristicTable characteristics={characteristics}/>
                <SkillTable skillGroups={skills.primarySkills}/>
            </div>
        )
    }
}