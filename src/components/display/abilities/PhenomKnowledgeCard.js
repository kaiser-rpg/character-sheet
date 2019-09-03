import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const PKCard = () => {
    let mk = useSelector(state => state.present.abilities.manifestAbilities.phenomKnowledge);

    return <EntryCard entry={mk}/>
};

export default PKCard;