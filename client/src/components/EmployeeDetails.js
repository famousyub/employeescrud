import React from "react";
import axios from "axios";

export default class EmployeeDetails extends React.Component{

    constructor(props){
        super(props)
    }
    state = {
        employee : {
            id_ :'',
            firstname :'',
            companyname :'',
            phone:''
        },
        loading :false 
    }

    componentDidMount(){
        axios.get("/api/getEmployee/" + this.props.id ).then(res=>{
            console.log(res);
            this.setState({
               employee:res.data,
               loading:true
            })
        })
    }
}