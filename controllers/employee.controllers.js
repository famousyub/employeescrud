const employee = require('../models/employees.models');

const AddEmployee = async (req ,res)=>{
   
    
              /*  await employee.create(req.body,function(err,doc){
                    if(err) {
                        console.log(err);
                    }
                    else res.status(201).body(doc);
                });
                */

                employee.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    addressOne: req.body.addressOne,
                    addressTwo: req.body.addressTwo,
                    city: req.body.city,
                    state: req.body.state,
                    zip: req.body.zip,
                    email: req.body.email,
                    phone: req.body.phone,
                    phoneType: req.body.phoneType
                }, function (err, doc) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.send(doc);
                    }
                });
           
}

const FindAllEmployees = async (req ,res)=>{
    try {
       const data =  await employee.find();
       res.status(200).json(data)

    } catch (error) {
        res.status(404).json(error.message)
    }
}

const FindEmployee = async (req ,res)=>{
    try {
        const data =  await employee.findOne({_id: req.params.id});
        res.status(200).json(data)
 
     } catch (error) {
         res.status(404).json(error.message)
     }
}

const DeleteEmployee = async (req ,res)=>{
    try {
        const data =  await employee.findOneAndRemove({_id: req.params.id})
        res.status(200).json({message: "deleted"})
 
     } catch (error) {
         res.status(404).json(error.message)
     }
}

const UpdateEmployye = async(req,res) =>{
    employee.findOneAndUpdate({"_id": req.params.id}, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        addressOne: req.body.addressOne,
        addressTwo: req.body.addressTwo,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        email: req.body.email,
        phone: req.body.phone,
        phoneType: req.body.phoneType
    }, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.send("Employee updated");
        }
    });
}


module.exports = {
    AddEmployee,
    FindAllEmployees,
    FindEmployee,
    DeleteEmployee,
    UpdateEmployye
}