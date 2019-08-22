import React from "react";
import Grid from "@material-ui/core/Grid";
import CharTable from "./display/CharTable";
import ResistanceTable from "./display/ResistanceTable";

const GeneralGroup = () => {

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <CharTable/>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={0}>
                        <Grid item xs={4}>
                            <ResistanceTable/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default GeneralGroup;

class LifePoints extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let lp = this.props.lifePoints;

        return (
            <div className="column">
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
                            20+({lp.freeBase}+{lp.base})&times;{lp.charPermanentTotal}
                        </td>
                    </tr>
                    <tr style={styles.row}>
                        <td>
                            Bonus
                        </td>
                        <td>
                            {lp.factors.permanent}
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
            <div className="column">
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
                            {phr.charModifier}
                        </td>
                        <td>
                            +
                        </td>
                        <td className='skill-row-factor'>
                            {phr.factors.permanent}
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
                            {sr.charModifier}
                        </td>
                        <td>
                            +
                        </td>
                        <td className='skill-row-factor'>
                            {sr.factors.permanent}
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
                        <td className='skill-row-factor'>
                            {mr.factors.permanent}
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