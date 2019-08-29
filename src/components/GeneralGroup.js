import React from "react";
import Grid from "@material-ui/core/Grid";
import CharTable from "./display/abilities/CharTable";
import ResistanceTable from "./display/abilities/ResistanceTable";
import StaminaTable from "./display/abilities/StaminaTable";
import MovementTable from "./display/abilities/MovementTable";

const GeneralGroup = () => {

    return (
        <div>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={1}
            >
                <Grid item xs={12} sm={6}>
                    <CharTable />
                </Grid>
                <Grid item xs={12} sm={6}
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                      spacing={1}>
                    <Grid item>
                        <ResistanceTable/>
                    </Grid>
                    <Grid item>
                        <StaminaTable/>
                    </Grid>
                </Grid>
                <Grid item>
                    <MovementTable/>
                </Grid>
            </Grid>
        </div>
    );
};

export default GeneralGroup;