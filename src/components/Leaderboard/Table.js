import React from 'react';

import TableHeader from './Tableheader'; 
import User from './User'; 

const Table = () => (
    <table className="table table-striped table-bordered">
        <TableHeader />
        {/*table body componenet: userlist*/}
            <User />
    </table>
)

export default Table; 