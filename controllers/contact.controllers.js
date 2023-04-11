const contact = require('../models/contact.models');

const Addcontact = async (req ,res)=>{
   
    
              /*  await employee.create(req.body,function(err,doc){
                    if(err) {
                        console.log(err);
                    }
                    else res.status(201).body(doc);
                });
                */

                contact.create({
                    fullName: req.body.fullName,
                    companyName: req.body.companyName,
                  
                 
                  
                    email: req.body.email,
                    phone: req.body.phone,
                    adress: req.body.adress
                }, function (err, doc) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.send(doc);
                    }
                });
           
}

const FindAllContact = async (req ,res)=>{
    try {
       const data =  await contact.find();
       res.status(200).json(data)

    } catch (error) {
        res.status(404).json(error.message)
    }
}

const FindContact = async (req ,res)=>{
    try {
        const data =  await contact.findOne({_id: req.params.id});
        res.status(200).json(data)
 
     } catch (error) {
         res.status(404).json(error.message)
     }
}

const DeleteContact = async (req ,res)=>{
    try {
        const data =  await contact.findOneAndRemove({_id: req.params.id})
        res.status(200).json({message: "deleted"})
 
     } catch (error) {
         res.status(404).json(error.message)
     }
}

const UpdateContact = async(req,res) =>{
    contact.findOneAndUpdate({"_id": req.params.id}, {
        fullName: req.body.fullName,
                    companyName: req.body.companyName,
                  
                 
                  
                    email: req.body.email,
                    phone: req.body.phone,
                    adress: req.body.adress
    }, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.send("contact updated");
        }
    });
}


module.exports = {
    Addcontact,
    FindAllContact,
    FindContact,
    DeleteContact,
    UpdateContact
}