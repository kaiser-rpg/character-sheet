import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const SPCard = () => {
    let sp = useSelector(state => state.present.skills.spellProjection);

    return <EntryCard entry={sp}/>
};

export default SPCard;