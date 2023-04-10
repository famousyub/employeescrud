import React from "react";

import axios from "axios" ;

import "./tablempl.css";
import Admin from "../pages/Admin";


export default class AllEmployees extends React.Component{

    constructor(props){
        super(props);

        //this.handledelete=this.handledelete.bind(this);
    }

    state = {
        employees : [],
        loading: false 
    }

    handledelete(_id) {
     
        axios.put("/api/removeEmployee/" + _id).then(res=>{
            console.log(res);
            setTimeout(() => {
                  window.location.reload();
            }, 1000);
        })
    }

    componentDidMount(){
        axios.get("/api/getAllEmployees").then(res=>{
            console.table(res);
            this.setState({
                employees:res.data,
                loading:true
            })
        })

    }

    render(){
        if(this.state.loading==false) {
            return <p>loading ..</p>
        }

        return (
                    
<div className="container">



<input id="myInput" type="text" placeholder="Search.." />

 <table className="table table-dark table-striped">
<thead>
  <tr>
    <th>id</th>
    <th>firstName</th>
    <th>city</th>
    <th>phone</th>

    <th>addressOne</th>
    <th>companyName</th>
    <th>addressTwo</th>

    <th>state</th>
    <th>zip</th>
    <th>email</th>

  

    

  


  </tr>
</thead>
<tbody id="myTable">
    {this.state.employees.map(user=>(
         <tr key={user._id} className= "tabdata"> 
         <td >{user._id}</td>
         <td>{user.firstName}</td>
         <td>{user.city}</td>
         <td>{user.phone}</td>

         <td>{user.addressOne}</td>
         <td>{user.addressOne}</td>
         <td>{user.addressTwo}</td>
         <td>{user.state}</td>
         <td>{user.zip}</td>
         <td>{user.email}</td>

     

      
     
       
       </tr>


    ))}
 
 

</tbody>
</table>

 
    
    <Admin/>

 </div>

)}


    }
