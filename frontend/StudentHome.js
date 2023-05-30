import {Link,useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import StudentApplyLeaveNavbar from './StudentApplyLeaveNavbar'
// import WorkingDayLeave from './WorkingDayLeave'
import '../App.css';
// import StudentApplyLeave from './StudentApplyLeave'
// import AWDL from './AWDL';

function StudentHome(){
  
  const [data,setData]= useState({});
  let navigate=useNavigate();
  const callAboutPage= async ()=>{
      try{

          const res= await fetch('/ab' ,{
              method:"GET",
              headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
              },
              credentials:"include"
});
          const data1= await res.json();
          console.log(data1);
          setData(data1);
          if(!res.status===200){
              const error= new Error(res.error);
              throw error;
          }
      }
catch(err){
          console.log(err);
          navigate('/Login');
      }
  }
  const [users, setUsers] = useState([]);

  async function login(){
const response = await fetch('/abc', {
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
     
    });
const actualdata = await response.json();
    setUsers(actualdata.data);
    console.log(actualdata.data);
    // return data;
  }

 

useEffect(()=>{
  callAboutPage();
  login();
},[]);
const color=(a)=>{
  if(a=='Pending')
  {
    return(
      <>
      <p style={{color:"yellow"}}> Pending</p>
      </>
    )
  }

else if(a=='Approved')
  {
    return(
      <>
      <p style={{color:"green"}}>Approved</p>
      </>
    )
  }
  else{
    return(
      <>
      <p style={{color:"red"}}>Rejected</p>
      </>
    )
}
}
  return(
        <>
        <StudentApplyLeaveNavbar/>
    

      <div >

<div class="row row-cols-1 row-cols-md-3 g-4" style={{margin:70+'px',marginTop:30+'px'}}>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      
     <div class="card-body comcol" >
     <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Remaining Leaves</b></h2></center>
      </div>
     
    </div>
  </div>
  
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
    <Link to='/studentholidayleave' style={{textDecoration:"none"}}>
    <div class="card-body comcol">
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431",textDecoration:"none"}}><b>View Holiday Leave</b></h2></center>
      </div>
    </Link> 
    </div>
  </div>

  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
    <Link to='/studentworkingdayleave' style={{textDecoration:"none"}}>
    <div class="card-body comcol">
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431",textDecoration:"none"}}><b>View workingday Leave</b></h2></center>
      </div>
    </Link>
      
    </div>

  </div>
</div>


<div class="row row-cols-1 row-cols-md-3 g-4" style={{margin:70+'px'}}>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      
    <Link to='/studentapplywdleave' style={{textDecoration:"none"}}>
    <div class="card-body comcol">
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431",textDecoration:"none"}}><b>Apply Workingday Leave</b></h2></center>
      </div>
    </Link>
     
    </div>
  </div>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
    <Link to='/studentapplyleave' style={{textDecoration:"none"}}>
    <div class="card-body comcol">
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431",textDecoration:"none"}}><b>Apply Holiday Leave</b></h2></center>
      </div>
    </Link>
      
    </div>
  </div>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      <div class="card-body comcol" style={{pointerEvents:"none"}}>
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Calender</b></h2></center>
      </div>
      
    </div>
  </div>
</div>


<div class="row row-cols-1 row-cols-md-3 g-4" style={{margin:70+'px'}}>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      
     <div class="card-body comcol" style={{pointerEvents:"none"}}>
     <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Sports</b></h2></center>
      </div>
     
    </div>
  </div>
  <div class="col sha hov ">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      <div class="card-body comcol" style={{pointerEvents:"none"}}>
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Assignment</b></h2></center> </div>
      
    </div>
  </div>
  <div class="col sha hov ">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      <div class="card-body comcol" style={{pointerEvents:"none"}}>
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Change Password</b></h2></center>
      </div>
      
    </div>
  </div>
</div>
</div>

        </>
    )
}

export default StudentHome;