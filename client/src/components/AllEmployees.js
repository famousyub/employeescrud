import React from "react";

import axios from "axios" ;

//import "./tablempl.css";
import Admin from "../pages/Admin";
import { AddEmployee } from "./AddEmployee";
import MyModalempl from "./MyModalempl";


export default class AllEmployees extends React.Component{

    constructor(props){
        super(props);

        //this.handledelete=this.handledelete.bind(this);
    }

    state = {
        employees : [],
        loading: false ,
        isclicked :false 
    }

    handleclick = () =>{

         this.setState({
            isclicked: !this.state.isclicked
         });
         console.log(this.state.isclicked)
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


<div className="col col-lg-9" dir="left">
           
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  add contact 
</button>

<MyModalempl />
</div>

 <table className="table" style={{backgroundColor:"#fff", boxShadow:" 70px 10px grey"}}>
<thead>
  <tr>
    <th>id</th>
    <th>firstName</th>
    <th>city</th>
    <th>phone</th>

    <th>addressOne</th>
    <th>companyName</th>
    <th>companyName</th>

    <th>state</th>
    <th>zip</th>
    <th>email</th>

  

    

  


  </tr>
</thead>
<tbody id="myTable" style={{backgroundColor:"#ffffef", boxShadow:" 5px 10px 8px 10px #888888;",textShadow:"2px 3px #fff"}}>
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
{
    this.state.isclicked ?  (

        <div>
              <Admin/>
              <button className="btn btn-info" onClick={this.handleclick}>hide  profile</button>
            </div>

    ) : <button className="btn btn-info"  onClick={this.handleclick} >show profile</button>
}
 
    
  

 </div>

)}


    }
