const Login = require('../models/loginModel');

exports.getLogin = function (req, res) {

    Login.find(function(err,result){
        if(err) throw err;
        console.log("data featched successfully:");
        res.send(result);
    })
}

exports.getRegister = function(req, res){
    var data = req.body;
console.log("data ***********",data);
    var loginData = {
        "email":data.companyEmail,
        "firstname":data.firstname,
        "lastname":data.lastname,
        "pass":data.pass,
        "phone":data.phone,
        "address":data.address ,
        "dob":data.dob,
        "company":data.company
        };
  
        var loginObj = new Login(loginData);
        loginObj.save( function(err){
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            res.send(loginObj);
            
        }
    });

}