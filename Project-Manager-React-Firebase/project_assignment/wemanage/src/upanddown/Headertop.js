import React from 'react'
import './header.css';

function headertop() {
    return (
        <div className="header">
            <h2 className="logo">WeManage</h2>
            <ul className="navList">
                <li>Sign In as Manager</li>
                <li>Sign In as User</li>
            </ul>
        </div>
    )
}

export default headertop
