import React from 'react';

const User = (props) => (
    <tr>
        <td className="idcol">{props.rank}</td>
        <td>
            <a href={"https://www.freecodecamp.com/"+props.data.username} target="_blank">
            <img src={props.data.img} alt="User's Avatar" className="userimg" />
            <span>{props.data.username}</span>
            </a>
        </td>
        <td className="pointscol">{props.data.recent}</td>
        <td className="pointscol">{props.data.alltime}</td>        
    </tr>
)

export default User 