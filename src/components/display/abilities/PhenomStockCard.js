import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const PSCard = () => {
    let block = useSelector(state => state.present.abilities.manifestAbilities.phenomStock);

    return <EntryCard addFooter entry={block}/>
};

export default PSCard;