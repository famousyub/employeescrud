import React from "react";
import axios from "axios";

import './addemployee.css';

import './mu.css';
import AllEmployees from "./AllEmployees";

export class AddEmployee extends React.Component{


    constructor(props){
        super(props);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleAddForm= this.handleAddForm.bind(this);
    }


    state = {

             firstName: "",
            companyName: "",
            addressOne: "",
            addressTwo: "",
            city: "",
            state: "",
            zip: "",
            email: "",
            phone: "",
            phoneType: "",

    }
    handleUserChange(event) {
        this.setState({ [event.target.name]: event.target.value});
     }

     handleAddForm(event) {
        event.preventDefault();

        axios.post("/api/addEmployee",

        {firstName: this.state.firstName,
        companyName: this.state.companyName,
        addressOne: this.state.addressOne,
        addressTwo: this.state.addressTwo,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        email: this.state.email,
        phone: this.state.phone,
        phoneType: this.state.phoneType }
        
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
              <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>add employee </h2>
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
                                        placeholder="First Name"
                                        name="firstName"
                                        type="text"
                                        className="validate form-group"
                                        value={this.state.firstName}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                                <div className="input-field col m6 s12">
                                    <input
                                        placeholder="company Name"
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
                                        placeholder="Address One"
                                        name="addressOne"
                                        type="text"
                                        className="validate  form-group"
                                        value={this.state.addressOne}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m12 s12">
                                    <input
                                        placeholder="Address Two"
                                        name="addressTwo"
                                        type="text"
                                        className="validate form-group"
                                        value={this.state.addressTwo}
                                        onChange={this.handleUserChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m6 s12">
                                    <input
                                        placeholder="City"
                                        name="city"
                                        type="text"
                                        className="validate form-group"
                                        value={this.state.city}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                                <div className="input-field col m3 s6">
                                    <select className="browser-default" name="state" value={this.state.state} onChange={this.handleUserChange} required>
                                        <option value="" disabled>State</option>
                                        <option value="AL">AL</option>
                                        <option value="AK">AK</option>
                                        <option value="AZ">AZ</option>
                                        <option value="AR">AR</option>
                                        <option value="CA">CA</option>
                                        <option value="CO">CO</option>
                                        <option value="CT">CT</option>
                                        <option value="DE">DE</option>
                                        <option value="FL">FL</option>
                                        <option value="GA">GA</option>
                                        <option value="HI">HI</option>
                                        <option value="ID">ID</option>
                                        <option value="IL">IL</option>
                                        <option value="IN">IN</option>
                                        <option value="IA">IA</option>
                                        <option value="KS">KS</option>
                                        <option value="KY">KY</option>
                                        <option value="LA">LA</option>
                                        <option value="ME">ME</option>
                                        <option value="MD">MD</option>
                                        <option value="MA">MA</option>
                                        <option value="MI">MI</option>
                                        <option value="MN">MN</option>
                                        <option value="MS">MS</option>
                                        <option value="MO">MO</option>
                                        <option value="MT">MT</option>
                                        <option value="NE">NE</option>
                                        <option value="NV">NV</option>
                                        <option value="NH">NH</option>
                                        <option value="NJ">NJ</option>
                                        <option value="NM">NM</option>
                                        <option value="NY">NY</option>
                                        <option value="NC">NC</option>
                                        <option value="ND">ND</option>
                                        <option value="OH">OH</option>
                                        <option value="OK">OK</option>
                                        <option value="OR">OR</option>
                                        <option value="PA">PA</option>
                                        <option value="RI">RI</option>
                                        <option value="SC">SC</option>
                                        <option value="SD">SD</option>
                                        <option value="TN">TN</option>
                                        <option value="TX">TX</option>
                                        <option value="UT">UT</option>
                                        <option value="VT">VT</option>
                                        <option value="VA">VA</option>
                                        <option value="WA">WA</option>
                                        <option value="WV">WV</option>
                                        <option value="WI">WI</option>
                                        <option value="WY">WY</option>
                                    </select>
                                </div>
                                <div className="input-field col m3 s6">
                                    <input
                                        placeholder="Zip"
                                        name="zip"
                                        type="number"
                                        className="validate form-group"
                                        value={this.state.zip}
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
                                        placeholder="Phone"
                                        name="phone"
                                        type="number"
                                        className="validate form-group"
                                        value={this.state.phone}
                                        onChange={this.handleUserChange}
                                        required />
                                </div>
                                <div className="input-field col m4 s4">
                                    <select className="browser-default" name="phoneType" value={this.state.phoneType} onChange={this.handleUserChange} required>
                                        <option value="" disabled>Phone Type</option>
                                        <option value="mobile">Mobile</option>
                                        <option value="work">Work</option>
                                        <option value="home">Home</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s4">
                                    <button id="addEmployee" className="btn btn-large waves-effect waves-light green accent-3 btn btn-primary btn-block"  type="submit" value="Submit">Add
                                        <i className="material-icons right ">person_add</i>
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