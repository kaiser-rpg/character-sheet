import {Page, Text, View} from "@react-pdf/renderer";
import React from "react";


export default () => {

    return (
        <Page size="letter">
            <View>
                <Text>
                    Hello World
                </Text>
                <MainPageGrid/>
            </View>
        </Page>
    )
}