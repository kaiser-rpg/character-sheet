import React from 'react';
import {useSelector} from "react-redux";
import EntryCard from "./EntryCard";

const BlockCard = () => {
    let block = useSelector(state => state.present.skills.block);

    return <EntryCard entry={block}/>
};

export default BlockCard;