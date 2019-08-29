import React from 'react';
import Badge from '@material-ui/core/Badge';


const DevCost = ({cost, children}) => {

    return (
        <React.Fragment>
            <Badge badgeContent={cost} color="primary">
                {children}
            </Badge>
        </React.Fragment>
    );
};

export default DevCost;