import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const MPCard = () => {
    let mp = useSelector(state => state.present.abilities.magicAbilities.manaPool);

    return <EntryCard addFooter entry={mp}/>
};

export default MPCard;