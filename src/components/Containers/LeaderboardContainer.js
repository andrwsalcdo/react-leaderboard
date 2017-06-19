import React from 'react';
import Leaderboard from '../Leaderboard/Leaderboard';


class LeaderBoardContainer extends React.Component {
    constructor() {
        super(); 
        this.state = {
            recentUsers: [],
            topUsers: [], 
            toggleUsers: []
        }; 
    }
    // toggle display for recentUsers
    toggleRecentUsers = () => {
        this.setState({ toggleUsers: this.state.recentUsers })
    }
    //toggle display for topUsers
    toggleTopUsers = () => {
        this.setState({ toggleUsers: this.state.topUsers })
    }
    //fetch both api before the component mounts. 
    componentDidMount = () => {
          fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then(res => res.json())
            .then((results) => this.setState({ recentUsers: results, toggleUsers: results }))

        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
            .then(res => res.json())
            .then((results) => this.setState({ topUsers: results }))
    }
    render() {
           return  <Leaderboard 
                        users={this.state.toggleUsers}
                        onClickTop={this.toggleTopUsers}
                        onClickRecent={this.toggleRecentUsers}
                     />
    }
}

export default LeaderBoardContainer; 