import React,{useState } from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core'
import './App.css';
import IndivTask from './IndivTask';
import TasksLists from './TasksLists';
import Headertop from './upanddown/Headertop';
import Footerdown from './upanddown/Footerdown';
import Line from './Shapes/Line';
// import taskdb from './taskfirebase';

function App() {
  const [uname,setuname]= useState([]);
  const [task,settask] = useState([]);
  const prevent=(event)=>{
    event.preventDefault();
  }
  const [mname,setmname] = useState('Harsh');

  // useEffect(()=> {
  //   // this loads / fires when the app loads + when ever dependencies changes/ triggered
  //       taskdb.collection('ProjectsAssigned').orderBy('timestamp','desc').onSnapshot(snapshot =>{ //always listen when ever there will be any change on database
  //         console.log(snapshot.docs.map(doc =>doc.data().ProjectsAssigned));
  //         settask(snapshot.docs.map(doc =>doc.data().ProjectsAssigned))
  //       })
  //     },[]);
    
  //       settask([...task, task]);//spreading previous already input and then adding new input
  //       settask('');//will clear any left over text in input
      

  return (
    <div className="App">
      <Headertop />
     <h2> Welcome to We-Manage </h2>
     <h4> Where you can keep track of the projects and people assigned that project.</h4>
     <br>
     </br>
     <div className="Assignment_Form">
       <form>
         <FormControl style={{width: "50%" , margin : "5px"}}>
          <InputLabel>Manager Name | Change if not as Logged in</InputLabel>
         <Input placeholder="Manager Name Change if not as Logged in " value={mname} onChange={event => setmname(event.target.value)}/>
         </FormControl>
         <br></br>
         <FormControl style={{width: "50%" , margin : "5px"}}>
          <InputLabel>Employee Name to which task is assigned to</InputLabel>
          <Input placeholder="Employee Name to which task is assigned to " value={uname} onChange={event => setuname(event.target.value)}/>
        </FormControl>
        <br></br>
        <FormControl style={{width: "50%" , margin : "5px"}}>
         <InputLabel>Project Description</InputLabel>
         <Input placeholder="Project Description" value={task} onChange={event => settask(event.target.value)}/>
        </FormControl> 
        <br></br>
        <div className="Assign_Task">
        <Button type="submit" onClick={event => prevent()} ><h3>Assign Task</h3></Button>
        </div>

         {console.log(uname+task)}
        
       </form>
     </div>
 
     <div className="Show_task">
          <h2>Task Assignment Report</h2>
          <ul >
            <IndivTask manager={mname} assignedto={uname} project={task}/>
          </ul>
        </div>
     <Line />
    <TasksLists />


    <Footerdown />
    </div>
  );
}

export default App;
