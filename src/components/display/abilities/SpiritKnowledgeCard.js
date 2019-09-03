import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const SKCard = () => {
    let sk = useSelector(state => state.present.abilities.martialAbilities.spiritKnowledge);

    return <EntryCard entry={sk}/>
};

export default SKCard;