import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const StaminaCard = () => {
    let stamina = useSelector(state => state.present.abilities.generalAbilities.stamina);

    return <EntryCard entry={stamina}/>
};

export default StaminaCard;