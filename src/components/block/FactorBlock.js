import React from "react";
import {sheet} from "../../reducers";
import {deleteId} from "../../actions/sheet-actions";


export default class FactorBlock extends React.Component {

    constructor(props) {
        super(props);

        this.deleteById = this.deleteById.bind(this);
    }

    deleteById() {
        console.log("delete by id for", this.props.factor._id);
        sheet.dispatch(deleteId(this.props.factor._id));
    }

    deleteBySource() {
        console.log("delete by source for", this.props.factor._id);
    }

    render() {
        let {
            _id,
            superType,
            type,
            key,
            value,
            source,
            note
        } = this.props.factor;

        return (
            <div style={styles.box}>
                <h3>{this.props.name}</h3>
                <div>
                    {_id}
                    <button onClick={this.deleteById}>x</button>
                    {superType} {type} {key}
                </div>
                <div>
                    {value} {source}
                    <button onClick={this.deleteById}>x</button>
                    {note}
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