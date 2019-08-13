import React from "react";


export default class GeneralGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {lifePoints, presence, physicalResistance, spiritResistance, mentalResistance} = this.props.generalAbilities;
        let resistance = {
            prr: presence,
            phr: physicalResistance,
            sr: spiritResistance,
            mr: mentalResistance
        };

        return (
            <div>
                <LifePoints lifePoints={lifePoints}/>
                <Resistance resistance={resistance}/>
            </div>
        )
    }
}

class LifePoints extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let lp = this.props.lifePoints;

        return (
            <div>
                <h3>{lp.title}</h3>
                <table style={styles.table}>
                    <tbody>
                    <tr style={styles.row}>
                        <td colSpan={2}>
                            Base
                        </td>
                    </tr>
                    <tr style={styles.row}>
                        <td colSpan={2}>
                            20+({lp.freeBase}+{lp.base})&times;{lp.multiplier}
                        </td>
                    </tr>
                    <tr style={styles.row}>
                        <td>
                            Bonus
                        </td>
                        <td>
                            {lp.innate}
                        </td>
                    </tr>
                    <tr style={styles.row}>
                        <td>
                            Total
                        </td>
                        <td>
                            {lp.total}
                        </td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr style={styles.row}>
                        <td colSpan={2}>
                            Current
                        </td>
                    </tr>
                    <tr style={styles.row}>
                        <td colSpan={2}>
                            {lp.currentTotal}
                        </td>
                    </tr>
                    </tbody>

                </table>
            </div>
        )
    }
}

class Resistance extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        let {prr, phr, sr, mr} = this.props.resistance;

        return (
            <div>
                <h3>Resistance</h3>
                <table style={styles.table}>
                    <tbody>
                    <tr style={styles.row}>
                        <td className='skill-row-name'>
                            {prr.title}
                        </td>
                        <td className='skill-row-final'>
                            {prr.permanentTotal}
                        </td>
                    </tr>
                    <tr style={styles.row}>
                        <td className='skill-row-name'>
                            {phr.title}
                        </td>
                        <td className='skill-row-final'>
                            {phr.permanentTotal}
                        </td>
                        <td>
                            =
                        </td>
                        <td className='skill-row-base'>
                            {phr.base}
                        </td>
                        <td>
                            +
                        </td>
                        <td className='skill-row-modifier'>
                            {phr.modifier}
                        </td>
                        <td>
                            +
                        </td>
                        <td className='skill-row-innate'>
                            {phr.innate}
                        </td>
                        <td>
                            +
                        </td>
                        <td className='skill-row-natural'>
                            {phr.natural}
                        </td>
                    </tr>
                    <tr style={styles.row}>
                        <td className='skill-row-name'>
                            {sr.title}
                        </td>
                        <td className='skill-row-final'>
                            {sr.permanentTotal}
                        </td>
                        <td>
                            =
                        </td>
                        <td className='skill-row-base'>
                            {sr.base}
                        </td>
                        <td>
                            +
                        </td>
                        <td className='skill-row-modifier'>
                            {sr.modifier}
                        </td>
                        <td>
                            +
                        </td>
                        <td className='skill-row-innate'>
                            {sr.innate}
                        </td>
                        <td>
                            +
                        </td>
                        <td className='skill-row-natural'>
                            {sr.natural}
                        </td>
                    </tr>
                    <tr style={styles.row}>
                        <td className='skill-row-name'>
                            {mr.title}
                        </td>
                        <td className='skill-row-final'>
                            {mr.permanentTotal}
                        </td>
                        <td>
                            =
                        </td>
                        <td className='skill-row-base'>
                            {mr.base}
                        </td>
                        <td>
                            +
                        </td>
                        <td className='skill-row-modifier'>
                            {mr.modifier}
                        </td>
                        <td>
                            +
                        </td>
                        <td className='skill-row-innate'>
                            {mr.innate}
                        </td>
                        <td>
                            +
                        </td>
                        <td className='skill-row-natural'>
                            {mr.natural}
                        </td>
                    </tr>
                    </tbody>

                </table>
            </div>
        )
    }
}

const styles = {
    table: {},
    row: {
        outline: 'solid black'
    }
};