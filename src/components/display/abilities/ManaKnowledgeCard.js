import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const MKCard = () => {
    let mk = useSelector(state => state.present.abilities.magicAbilities.manaKnowledge);

    return <EntryCard entry={mk}/>
};

export default MKCard;