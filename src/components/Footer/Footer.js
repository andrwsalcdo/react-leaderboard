import React from 'react';

import FaGithub from 'react-icons/lib/fa/github';

const Footer = () => (
    <div id="footer" className="text-center">
        <p >Made by Andrew Salcedo
        <span> 
            <a href="https://github.com/andrwsalcdo/react-leaderboard">
                <FaGithub size={25} color="black" /> 
            </a>        
        </span>
        </p>
        
    </div>  
)

export default Footer; 