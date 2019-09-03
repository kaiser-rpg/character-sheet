import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const StrikeCard = () => {
    let strike = useSelector(state => state.present.skills.strike);

    return <EntryCard entry={strike}/>
};

export default StrikeCard;