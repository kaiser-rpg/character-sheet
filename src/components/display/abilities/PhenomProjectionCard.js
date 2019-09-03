import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const PPCard = () => {
    let pp = useSelector(state => state.present.skills.phenomProjection);

    return <EntryCard entry={pp}/>
};

export default PPCard;