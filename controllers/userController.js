const User = require('../models/userModel');
const bcrypt = require('bcrypt')

const registerLoad = async (req,res) =>{
  try {
    res.render('register')
  } catch (error) {
    console.log(error.message);
  }
}

const register = async (req,res) =>{
  
    try {
      const passwordHash = await bcrypt.hash(req.body.password, 10);

      const Users = new User({
        name:req.body.name,
        email:req.body.email,
        image:req.file.filename,
        password:passwordHash
      })
      await Users.save()
    } catch (error) {
      console.log(error.message);
    }
}

module.exports = {
    registerLoad,
    register
}