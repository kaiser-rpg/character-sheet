import {sheet} from "../../reducers/SheetApp";
import {deleteId} from "../../actions/sheet-actions";
import React from "react";
import Modal from 'react-modal';


export default class SkillModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    get baseTable() {
        let skill = this.props.skill;
        let baseRows = skill.baseValues.map(factor => <FactorRow key={factor._id} factor={factor} />);

        if (skill.isLowerTie) {
            let r = {
                _id: 0,
                type: "tied to",
                value: skill.base,
                source: skill.tiedTo.skill.title,
                note: "behind by " + skill.tiedTo.behind + " points"
            };
            baseRows.push(<FactorRow key={r._id} factor={r} />);
        }

        if (baseRows.length === 0) baseRows.push(<tr key={0}>
            <td colSpan={8}>No base value</td>
        </tr>)


        return (
            <table className='modal-table'>
                <thead>
                    <tr>
                        <th>value</th>
                        <th>type</th>
                        <th colSpan={3}>notes</th>
                        <th>source</th>
                    </tr>
                </thead>
                <tbody>
                    {baseRows}
                </tbody>
            </table>
        );
    }

    get factorTable() {
        let skill = this.props.skill;
        let factorRows = skill.factorValues.sort(sortFactor).map(factor => <FactorRow key={factor._id}
                                                                                      factor={factor}/>);

        if (skill.isUntrained) {
            let r = {
                _id: 0,
                type: "untrained",
                value: -3,
                source: "core",
                note: ""
            }
            factorRows.push(<FactorRow key={r._id} factor={r} />);
        }

        if (factorRows.length === 0) factorRows.push(<tr key={0}>
            <td colSpan={5}>No factors</td>
        </tr>)

        return (
            <table className='modal-table'>
                <thead>
                    <tr>
                        <th>value</th>
                        <th>type</th>
                        <th colSpan={3}>notes</th>
                        <th>source</th>
                    </tr>
                </thead>
                <tbody>
                    {factorRows}
                </tbody>
            </table>
        );
    }

    render() {
        let skill = this.props.skill;
        return (
            <div>
                <span className="modal-open" onClick={this.openModal}>&#8942;</span>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Skill Modal"
                    className="modal-content"
                >
                    <div className="modal-header">
                        <span className="modal-close" onClick={this.closeModal}>&times;</span>
                        <h2>{skill.title}</h2>
                    </div>

                    <div className="modal-body">
                        <h4>Base Value</h4>
                        <div>{skill.base}</div>
                        {this.baseTable}

                        <h4>Modifier</h4>
                        <div>{skill.char.toUpperCase()}: {skill.modifier}</div>

                        <h4>Factors</h4>
                        {this.factorTable}

                    </div>

                    <div className="modal-footer">
                        <h3>Total</h3>
                        <div>{skill.total}</div>
                    </div>
                </Modal>
            </div>
        )
    }
}

class FactorRow extends React.Component {

    constructor(props) {
        super(props);
        this.deleteById = this.deleteById.bind(this);
    }

    deleteById() {
        console.log("delete by id for", this.props.factor._id);
        sheet.dispatch(deleteId(this.props.factor._id));
    }

    render() {
        let {
            _id,
            type,
            value,
            source,
            note
        } = this.props.factor;

        if (note && Array.isArray(note)) {
            note = note.filter(n => n).map(n => (<div key={n}>{n}</div>));
        }

        let button;
        if (_id) {
            button = (<td>
                <span className="skill-factor-delete" onClick={this.deleteById}>&times;</span>
            </td>);
        }

        type = type.replace("add", "").replace(/-/g, " ").trim();

        return (
            <tr>
                <td>{value > 0 ? '+' + value : value}</td>
                <td>{type}</td>
                <td colSpan={3}>{note}</td>
                <td>{source}</td>
                {button}
            </tr>

        );
    }
}

const sortFactor = (a, b) => {
    // Sort by Type
    if (a.type.toLowerCase() !== b.type.toLowerCase()) return a.type.toLowerCase() > b.type.toLowerCase() ? 1 : -1;

    return a.value - b.value;
};