const bcrypt =require('bcryptjs')
const User =require('../models/signup');

exports.signupForm = (req, res, next) => {
  
  res.render('signup');
 
 
};


exports.postSignupData = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;
    const re_pass = req.body.re_pass;

  User.findOne({ email: email  })
    .then(userDoc => {
      if (userDoc) {
        return res.render('signup', {pageTitle: 'email already exist' });
      }       
      return bcrypt.hash(pass, 12)
      .then( hashedPasswaord =>{
         User.create({
          name: name,
          email: email,
          password: hashedPasswaord
        });
        
      }).then(result => {
        
        return res.redirect('/login');
      })
      })
    .catch(err => {
      console.log('this is error',err)
    })
     
    
    

}