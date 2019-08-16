import React from 'react'
import CharacteristicTable from "./CharacteristicTable";
import SkillTable from "./SkillTable";

export default class ColumnLeft extends React.Component {
    render() {
        let {abilities, skills, characteristics} = this.props.sheet;
        return (
            <div className="column-60-left">
                <CharacteristicTable characteristics={characteristics}/>
                <SkillTable skillGroups={skills.primarySkills}/>
            </div>
        )
    }
}