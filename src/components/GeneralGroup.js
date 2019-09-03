import React from "react";
import Grid from "@material-ui/core/Grid";
import CharTable from "./display/abilities/CharCard";
import ResistanceCard from "./display/abilities/ResistanceCard";
import StaminaCard from "./display/abilities/StaminaCard";
import MovementCard from "./display/abilities/MovementCard";
import LifePointsCard from "./display/abilities/LifePointsCard";

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
                        <ResistanceCard/>
                    </Grid>
                    <Grid item>
                        <StaminaCard/>
                    </Grid>
                    <Grid item>
                        <LifePointsCard/>
                    </Grid>
                </Grid>
                <Grid item>
                    <MovementCard/>
                </Grid>
            </Grid>
        </div>
    );
};

export default GeneralGroup;