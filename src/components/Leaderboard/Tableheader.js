import React from 'react';

const Tableheader = (props) => (
    <thead> 
        <tr id="colheaders" className="top100">
            <th className="idcol">#</th>
            <th>Camper Name</th>
            <th className="30days">
              <a onClick={props.toggleRecentScores}>Points in past 30 days</a>
            </th>
            <th className="allTime">
               <a onClick={props.toggleTopScores}>All time points</a>
            </th>
        </tr>
    </thead>
)

export default Tableheader; 