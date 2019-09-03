import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const DodgeCard = () => {
    let dodge = useSelector(state => state.present.skills.dodge);

    return <EntryCard entry={dodge}/>
};

export default DodgeCard;