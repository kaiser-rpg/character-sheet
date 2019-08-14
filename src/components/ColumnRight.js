import React from 'react'
import FactorBlock from "./block/FactorBlock";
import SkillTable from "./SkillTable";

export default class ColumnRight extends React.Component {

    render() {
        let arr = [];

        let {skills, abilities} = this.props.sheet;

        skills.block.factors.forEach(factor => arr.push(<FactorBlock name={"block"} factor={factor}/>));

        return (
            <div className="column-33-right">
                <SkillTable skillGroups={skills.secondarySkills}/>
            </div>
        )
    }
}