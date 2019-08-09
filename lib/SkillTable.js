import React from 'react'
import SkillGroupBody from "./SkillGroupBody";

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

const styles = {
    table: {}
}