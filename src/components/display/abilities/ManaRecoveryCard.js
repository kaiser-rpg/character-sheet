import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const MRCard = () => {
    let mr = useSelector(state => state.present.abilities.magicAbilities.manaRecovery);

    return <EntryCard entry={mr}/>
};

export default MRCard;