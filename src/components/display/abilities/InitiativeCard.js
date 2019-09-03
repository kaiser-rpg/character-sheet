import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const InitiativeCard = () => {
    let init = useSelector(state => state.present.skills.initiative);

    return <EntryCard entry={init}/>
};

export default BlockCard;