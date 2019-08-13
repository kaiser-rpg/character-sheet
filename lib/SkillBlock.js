import React from 'react'
import CircleNumber from "./CircleNumber"

export default class SkillBlock extends React.Component {
    render() {
        return (
            <div style={styles.box}>
                <CircleNumber/><span>{this.props.skill.name}</span>
                <div>
                    Base Value: {this.props.skill.base}
                </div>
                <div>
                    Innate Bonus: {this.props.skill.innate}
                </div>
                <div>
                    Natural Bonus: {this.props.skill.natural}
                </div>
                <div>
                    Final Value: {this.props.skill.base + this.props.skill.innate + this.props.skill.natural}
                </div>
            </div>
        )
    }
}

const styles = {
    box: {
        borderRadius: '25px',
        border: '3px solid black',
        padding: '10px'
    }
};