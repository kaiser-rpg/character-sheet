import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const KiCard = () => {
    let ki = useSelector(state => state.present.martial.kiReserve);

    return <EntryCard addFooter entry={ki}/>
};

export default KiCard;