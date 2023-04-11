import React from "react";

import axios from "axios" ;

//import "./tablempl.css";
import Admin from "../../pages/Admin";

import ModalContact from "./ModalContact";
import { Link } from "react-router-dom";
import { UpdateContact } from "../contact/UpdateContact";


export default class AllContacts extends React.Component{

    constructor(props){
        super(props);

   
    }

    state = {
        contacts : [],
        loading: false ,
        isclicked :false ,
        edithiden:false ,
        user: {

        }
    }

    handleclick = () =>{

         this.setState({
            isclicked: !this.state.isclicked
         });
         console.log(this.state.isclicked)
    }

    handledelete = (_id) => {

        alert(_id);
     //http://localhost:3001/api/removeContact/6435aa06f24146d7ec625474
       axios.put(`/api/removeContact/${_id}`).then(res=>{
            console.log(res);

            alert("deleted");

            window.location.reload();

            
          
        })
    }


      read=(_id) =>{
        axios.get(`/api/contact/${_id}`).then(res=>{
            this.setState({
                user:res.data
            })

        });
      }
    saveId=(id)=>{
        localStorage.setItem("id",id);




        
       

       /* this.setState({
            edithiden: !this.state.edithiden,
            user_id:id
        })*/
    }

    componentDidMount(){

     
        axios.get("/api/getAllcontacts").then(res=>{
            console.table(res);
            this.setState({
                contacts:res.data,
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

    <div>

    </div>

    <div>

    </div>
    <br/>



<br/>


{/* 
<input id="myInput" type="text" placeholder="Search.." /> */}


<div className="col col-lg-9 justify-content-center" dir="left">
           
<button type="button" className="btn btn-primary " data-toggle="modal" data-target="#exampleModal" style={{backgroundColor:"green",float:"left",marginBottom:"20px"}} >
  Add Contact 
</button>

<br/>
<br/>


<ModalContact />
</div>

 <table className="table" style={{backgroundColor:"#fff"}}>
<thead>
  <tr>
    <th>#Id</th>
    <th>FullName</th>
  
    <th>Phone_number</th>

   
    <th>Company_name</th>

    <th>
        Address
    </th>
   

 
    <th>Email</th>
  <th>

    Read
  </th>
  
    <th>
        Delete  
    </th>
    

    <th>
        Update
    </th>

  


  </tr>

</thead>
<tbody id="myTable" style={{backgroundColor:"#fff", boxShadow:" 5px 10px 8px 10px #888888;",textShadow:"2px 3px #fff"}}>
    {this.state.contacts.map(user=>(
         <tr key={user._id} className= "tabdata"> 
         <td >{user._id}</td>
         <td>{user.fullName }</td>
     
         <td>{user.phone}</td>

   
      
         <td>{user.companyName}</td>
         <td>{user.adress}</td>
      
         <td>{user.email}</td>


         <td>
              
              <button className="btn btn-info" onClick={()=>this.read(user._id)
              }   style={{backgroundColor:"#fff" , color: "black"}}>read</button>
              
                 </td>
 


    <td>
        

    <button className="btn btn-info" onClick={()=>this.saveId(user._id)
    }   style={{backgroundColor:"green"}} >edit</button>
    
                
                

           
    </td>
      
         
    <td>
   
   <button className="btn btn-danger"   onClick  ={()=>this.handledelete(user._id)}>delete</button>
</td>
  
       </tr>

      


    ))}
 
 

</tbody>
</table>

 
    
  
  {
    this.state.user ? (
      

        <div className="container">
             <table className="table" style={{backgroundColor:"#fff"}}>
<thead>
  <tr>
    <th>#Id</th>
    <th>FullName</th>
  
    <th>Phone_number</th>

   
    <th>Company_name</th>

    <th>
        Address
    </th>
   

 
    <th>Email</th>
   </tr> 
    </thead>
<tbody id="myTable" style={{backgroundColor:"#fff", boxShadow:" 5px 10px 8px 10px #888888;",textShadow:"2px 3px #fff"}}>

 <tr key={this.state.user._id} className= "tabdata"> 
         <td >{this.state.user._id}</td>
         <td>{this.state.user.fullName }</td>
     
         <td>{this.state.user.phone}</td>

   
      
         <td>{this.state.user.companyName}</td>
         <td>{this.state.user.adress}</td>
      
         <td>{this.state.user.email}</td>

   </tr> 
   </tbody>
         </table>


            </div>
    )  : <p>loading user ..</p>
  }

  {
    localStorage.getItem("id") ?  (
        <div>
   
        <UpdateContact id = {localStorage.getItem("id")}  />
        <button className="btn btn-info" onClick={this.saveId(localStorage.getItem("id"))}>hide  edit</button>
        </div>
    ):<button className="btn btn-info" onClick={this.saveId(localStorage.getItem("id"))}>show  profile</button>
  }
 </div>

)}


    }
/*

                
                 <Link className="btn btn-outline-primary" to={"/editcontact/" + user._id}  element={< UpdateContact  id = {user._id}/>} onClick={this.saveId(user._id)} onBlur={this.saveId(user._id)}>
                 <button onClick={this.saveId(user._id)} className="btn btn-info">  update-profile {user._id}  </button>
                 </Link>

                 {
    this.state.isclicked ?  (

        <div>
              <Admin/>
              <button className="btn btn-info" onClick={this.handleclick}>hide  profile</button>
            </div>

    ) : <button className="btn btn-info"  onClick={this.handleclick} >show profile</button>
}
              
*/