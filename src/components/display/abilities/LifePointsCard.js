import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const LPCard = () => {
    let lp = useSelector(state => state.present.abilities.generalAbilities.lifePoints);

    return <EntryCard entry={lp}/>
};

export default LPCard;