import Login from '../Component/Login';
import React ,{useEffect, useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
function Hod(){
 
const [users, setUsers] = useState([]);
  
    async function login(){
  
      const response = await fetch('http://localhost:8000/abcadmin', {
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
       
      });
      const data = await response.json();
      setUsers(data);
      console.log(data);
      // return data;
    }
useEffect(()=>{
   login();
},[])
const color=(a)=>{
  if(a=='pending')
  {
    return(
      <>
      <p class="badge badge-primary rounded-pill d-inline" style={{color:"#FFA351"}}> Pending</p>
      </>
    )
  }
  else if(a=='approved')
  {
    return(
      <>
      <p class="badge badge-success rounded-pill d-inline"  style={{color:"green"}}>Approved</p>
      </>
    )
  }
  else{
    return(
      <>
      <p   class="badge badge-warning rounded-pill d-inline" style={{color:"red"}}>Rejected</p>
      </>
    )

  }
}
    return (
     <>
  <nav class="navbar navbar-expand-lg" style={{backgroundColor:"rgb(222, 238, 252)",color:"#0E2431",fontSize:20+"px",fontFamily:"'Poppins',sans-serif"}} >
  <div class="container-fluid" style={{color:"#0E2431"}}>
    <a class="navbar-brand" href="#" style={{color:"#0E2431"}}>Hod Portal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item" >
          <Link to="/viewallstudenthod"class="nav-link active hov" aria-current="page" href="#" style={{color:"#0E2431"}}>Home</Link>
        </li>
        <li class="nav-item" >
          <Link to="/hod" class="nav-link active hov" aria-current="page" href="#" style={{color:"#0E2431"}}>View all request</Link>
        </li>
        <li class="nav-item">
          <Link to="/"class="nav-link" href="#" style={{color:"#0E2431",fontFamily:"'Poppins',sans-serif"}}>Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
   {/* Displaying all student requests */}
   <center>
   <div class="card-body" style={{marginTop:20+"px"}}>
   <h1 style={{color:"#0E2431",fontFamily:"'Poppins',sans-serif"}} >All Leave Request</h1> 
  </div>
  </center>

      <table  class="table" style={{backgroundColor:"rgb(245, 245, 245)",fontFamily:"'Poppins',sans-serif"}} >
  <thead style={{backgroundColor:" rgb(222, 238, 252)"}}>
    <tr>
      <th scope="col" style={{color:"#0E2431",fontSize:17+"px"}} >Student Name</th>
      <th scope="col" style={{color:"#0E2431",fontSize:17+"px"}} >Start Date</th>
      <th scope="col" style={{color:"#0E2431",fontSize:17+"px"}} >End Date</th>
      <th scope="col" style={{color:"#0E2431",fontSize:17+"px"}} >Type of Leave</th>
      <th scope="col" style={{color:"#0E2431",fontSize:17+"px"}} > WARDEN's Status</th>
      <th scope="col" style={{color:"#0E2431",fontSize:17+"px"}} > HOD's Status</th>
      <th scope="col" style={{color:"#0E2431",fontSize:17+"px"}} > Hod Update</th>
      
    </tr>
  </thead>
<tbody>
  {users.map(a=>{
          return(
            <tr scope="row">
      <td style={{color:"#6883BC",fontFamily:"'Poppins',sans-serif",fontSize:14+"px"}}>{a.studentname}</td>
      <td style={{color:"#6883BC",fontFamily:"'Poppins',sans-serif",fontSize:14+"px"}}>{a.startdate}</td>
      <td style={{color:"#6883BC",fontFamily:"'Poppins',sans-serif",fontSize:14+"px"}}>{a.enddate}</td>
      <td style={{color:"#6883BC",fontFamily:"'Poppins',sans-serif",fontSize:14+"px"}}>{a.purpose}</td>
      
      <td>{color(a.wardenstatus)}</td>
      <td>{color(a.hodstatus)}</td>
      <td><Link to={`/user/${a._id}`}><button className='but'>Update</button></Link></td>
    </tr>


        // <li>{a.studentname}</li>
         
        )  
      })}
    
    
  </tbody>

</table>

     </>
    )
}
export default Hod;