import { useEffect } from "react";
import { useNavigate} from 'react-router-dom';
function Logout(){

    let navigate=useNavigate();

    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        }).then((res)=>{
            navigate('/');
            if(!res.status === 200){
                const error  = new Error(res.error);
                throw error;
            }   
        }).catch((err)=>{
            console.log(err);
        })
    });

    return(
        <>
            <h1>hello logout page </h1>
        </>
    )
}

export default Logout;