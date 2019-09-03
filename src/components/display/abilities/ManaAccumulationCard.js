import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const MACard = () => {
    let ma = useSelector(state => state.present.abilities.magicAbilities.manaAccumulation);

    return <EntryCard entry={ma}/>
};

export default MACard;