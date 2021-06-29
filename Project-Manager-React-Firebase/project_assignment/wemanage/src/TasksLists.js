import React from 'react';
import './Taskslists.css';

export default function TasksLists() {
    return (
        <div className="Task_listed">
        <p>Your Tasks :</p>
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
            </ul>
        <p>Tasks you given :</p>
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
            </ul>
     </div>
    )
}
