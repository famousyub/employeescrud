import React  from "react";

import "axios";
import axios from "axios";
import Admin from "../pages/Admin";


export default class ListUser extends React.Component{


    constructor(props){
         super(props);
    }

    state = {
        user:[],
        loading: false
    }

    componentDidMount(){

         axios.get("/api/alluser").
        // then(json_ => json_.json()).
         
         then(res=>{


         console.log(res);
         this.setState({
             user: res.data,
             loading:true
         });

         })
    }

    render(){

        if(this.state.loading==false) {
            return <p>loading ..</p>
        }

        return (
                    
<div className="container">


<div className="row justify-content-center">
    <div className="col col-lg-12">
    <Admin />
        <div className="col col-sm-6">
      

 <table className="table">
<thead>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>email</th>
    <th>role</th>
  </tr>
</thead>
<tbody>
    {this.state.user.map(user=>(
         <tr key={user._id}>
         <td >{user._id}</td>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td>{user.role}</td>
       </tr>
    ))}
 
 

</tbody>
</table>

 
    

 </div>
        </div>
    </div>
</div>






)}

        


}