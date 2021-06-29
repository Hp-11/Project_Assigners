import React from 'react'
import './task.css'
import {Button} from '@material-ui/core'

function IndivTask(props) {
    return (
        <div className="print">
            <p>Lead name :{props.manager}</p>
            <p>Assigned to :{props.assignedto}</p>
            <p className="left">Project :{props.project}</p>
            <Button className="btn-print" onclick="window.print();return false;" href="IndivTask.js"><p> Print </p></Button>
        </div>
    )
}

export default IndivTask
