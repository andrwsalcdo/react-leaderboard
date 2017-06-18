import React from 'react';

const Tableheader = () => (
    <thead> 
        <tr id="colheaders" className="top100">
            <th className="idcol">#</th>
            <th>Camper Name</th>
            <th className="30days">Points in past 30 days</th>
            <th className="allTime">All time points</th>
        </tr>
    </thead>
)

export default Tableheader; 