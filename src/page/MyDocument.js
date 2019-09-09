import React from "react";
import {Document} from "@react-pdf/renderer";
import MainPage from "./MainPage";


export default () => {

    return (
        <Document>
            <MainPage/>
            <MainPage/>
        </Document>
    )
}