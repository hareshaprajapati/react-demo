import React from 'react';
import classes from './Staff.css';

const staff = (props) => {
    return (
            <div className={classes.Staff}>
                <div className={classes.Picture}>
                    <img src={props.photoURL} className={classes.Image} alt={props.name}></img>

                </div>
                <div >
                    <h4 className={classes.Title}> {props.name} </h4>
                    <p> {props.department}</p>
                    <p style={
                        {
                            'color': '-webkit-link',
                            'cursor': 'pointer',
                            'textdecoration': 'underline'
                        }
                    }> {props.email}</p>
                    <button className={classes.Button} >VIEW DETAILS > </button>
                </div>

            </div>

    );
};

export default staff;