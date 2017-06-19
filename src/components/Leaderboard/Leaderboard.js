import React from 'react';

//import child components
import Title from './Title'; 
import Tableheader from './Tableheader'; 
import User from './User'; 


const Leaderboard = (props) => {
    let rank = 0; 
    const rows = props.users; 
    const userList = rows.map((users, index) => {
        rank++; 
        return (
            //mapping over the User component to display them in the <tbody>
            //Key makes each User unique. 
            <User key={index} data={users} rank={rank} />
        )
    }); 
    return ( 
                     <div className="container">        
                        <Title />
                        <div className="row">
                            <div className="col-sm-12">
                                <table className="table table-striped table-bordered">
                                    <Tableheader 
                                        //pass on the click handler props to this child component
                                        // to display recent and top points
                                        toggleTopScores={props.onClickTop} 
                                        toggleRecentScores={props.onClickRecent} 
                                    />
                                    <tbody>
                                        {userList}
                                     </tbody>
                                 </table>
                             </div>
                         </div>
                     </div>    
    );

}

export default Leaderboard; 