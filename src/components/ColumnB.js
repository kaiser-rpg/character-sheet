import React from 'react'
import FactorBlock from "./block/FactorBlock";

export default class ColumnB extends React.Component {

    render() {
        let arr = [];

        let {skills, abilities} = this.props.sheet;

        skills.block.factors.forEach(factor => arr.push(<FactorBlock name={"block"} factor={factor}/>));

        return (
            <div className="column">
                {arr}
            </div>
        )
    }
}