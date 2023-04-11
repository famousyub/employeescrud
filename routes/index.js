var express = require("express");
const {
  Register,
  Login,
  Test,
  Admin,
  Fetchalluser
} = require("../controllers/users.controllers");
var router = express.Router();
const passport = require("passport");
const { ROLES, inRole } = require("../security/Rolemiddleware");
const { AddProfile, FindAllProfiles, FindSingleProfile, DeleteProfile } = require("../controllers/profile.controllers");


const { AddEmployee,FindAllEmployees,FindEmployee,DeleteEmployee,UpdateEmployye} =require("../controllers/employee.controllers");
const {   Addcontact,
  FindAllContact,
  FindContact,
  DeleteContact,
  UpdateContact} =require("../controllers/contact.controllers");
/* users routes. */
router.post("/register", Register);
router.post("/login", Login);
router.get('/alluser',Fetchalluser);

router.get("/getAllcontacts",FindAllContact);
router.put("/updateContact/:id",UpdateContact);

router.put("/removeContact/:id",DeleteContact);
router.get("/contact/:id",FindContact);

router.post("/addContact", Addcontact);


router.get("/getAllEmployees",FindAllEmployees);
router.put("/updateEmployee/:id",UpdateEmployye);

router.put("/removeEmployee/:id",DeleteEmployee);
router.get("/employee/:id",FindEmployee);

router.post("/addEmployee", AddEmployee);

/* add profile route */
router.post("/profiles", 
passport.authenticate("jwt", { session: false }),
AddProfile);
/* get all profiles */
router.get("/profiles", 
passport.authenticate("jwt", { session: false }),

inRole(ROLES.USER),
FindAllProfiles);
/* get one profiles */
router.get("/profile", 
passport.authenticate("jwt", { session: false }),
FindSingleProfile);
/* delete profiles */
router.delete("/profiles/:id", 
passport.authenticate("jwt", { session: false }),
inRole(ROLES.USER),
DeleteProfile);

module.exports = router;
