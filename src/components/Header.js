import React from 'react';
import classes from './Header.css';

const Header = (props) => {
    return (
        <header className={classes.Header}>
            <div>
                <h2>Our Team</h2>
                <p>Team by department</p>
                <p>
                    All the team members of all the departments
                </p>
            </div>
        </header>
    );
};

export default Header;