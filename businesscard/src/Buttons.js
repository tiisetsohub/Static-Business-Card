import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Buttons(){
    return (
        <div className = 'buttons'>
            <Link to='/demo'>
                <button className='emailsbtn'>Emails</button>
            </Link>
            <div className = 'divider' />
            <button className = 'linkbtn'>LinkedIn</button>
        </div>
    )
}