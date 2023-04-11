import React from "react";
import axios from "axios";





export class AddContact extends React.Component{


    constructor(props){
        super(props);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleAddForm= this.handleAddForm.bind(this);
    }


    state = {

        fullName: "",
            companyName: "",
           
            email: "",
            phone: "",
            adress: "",

    }
    handleUserChange(event) {
        this.setState({ [event.target.name]: event.target.value});
     }

     handleAddForm(event) {
        event.preventDefault();

        axios.post("/api/addContact",

        {fullName: this.state.fullName,
        companyName: this.state.companyName,
        adress: this.state.address,
      
       
        email: this.state.email,
        phone: this.state.phone,
        }
        
        ).then(res=>{
            console.log(res);
            console.table(res.data);

            setTimeout(() => {
                window.location.reload();
            }, 1000);

        })
        ;

            

       
    }

    componentDidMount(){

    }

    render(){
        return (


           

            <div className="container p-4 mt-4">
       
        
           
          
        
        <div className="row justify-content-evenly mt-4">
          <div className="col-lg-6 col-md-12 mt-4">
            <div className="d-flex">
              <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>add contact </h2>
            </div>
            <div
              className="p-6 shadow-lg p-3 mb-5 bg-body rounded"
              style={{ backgroundColor: "white" }}
            >
          


         
            
            <div className="col m9">
                    <div className="row">
                    <div class="form-wrap">	
                        <form className="col m12 form" onSubmit={this.handleAddForm} id="survey-form">

                            <div className="row">
                                <div className="input-field col m6 s12">
                                    <input
                                        placeholder="Full Name"
                                        name="fullName"
                                        type="text"
                                        className="validate form-group"
                                        value={this.state.fullName}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                                <div className="input-field col m6 s12">
                                    <input
                                        placeholder="Company Name"
                                        name="companyName"
                                        type="text"
                                        className="validate form-group"
                                        value={this.state.companyName}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m12 s12">
                                    <input
                                        placeholder="Address"
                                        name="address"
                                        type="text"
                                        className="validate  form-group"
                                        value={this.state.address}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                           
                            
                                
                                
                            <div className="row">
                                <div className="input-field col m12 s12">
                                    <input
                                        placeholder="Email"
                                        name="email"
                                        type="email"
                                        className="validate form-group"
                                        value={this.state.email}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m8 s8">
                                    <input
                                        placeholder="Phone number"
                                        name="phone"
                                        type="number"
                                        className="validate form-group"
                                        value={this.state.phone}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                              
                            </div>
                            <div className="row">
                                <div className="col s4">
                                    <button id="addContact" className="btn btn-large waves-effect waves-light green accent-3 btn btn-primary btn-block"  type="submit" value="Submit">Add
                                        <i className="material-icons right ">contact</i>
                                    </button>
                                </div>

                                </div>
                                
                                </form>
                                </div>
                                </div>
                                </div>

                                </div>

                                 </div>
                                </div>
                                
             </div>
        )
    }
}