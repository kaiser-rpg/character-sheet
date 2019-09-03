import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const PotentialCard = () => {
    let potential = useSelector(state => state.present.abilities.manifestAbilities.potential);

    return <EntryCard entry={potential}/>
};

export default PotentialCard;