const express = require ('express');
const router = express.Router();


//register

router.get ('/register', (req,res,next) =>{
  res.send ('REGISTER');
});


//Authenticate

router.get ('/authenticate', (req, res, next) => {
  res.send ('AUTHENTICATE');
});



  //PROFILE

  router.get ('/profile', (req,res,next) =>{
    res.send ('PROFILE');
});

//VALIDATE

router.get ('/validate', (req,res,next) =>{
  res.send ('VALIDATE');
});

module.exports = router;
