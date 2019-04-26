const Login = require('../module/emplmodule');

exports.getLogin = function (req, res) {

    Login.find(function(err,result){
        if(err) throw err;
        console.log("data featched successfully:");
        res.send(result);
    })
}

exports.getRegister = function(req, res){
    var data = req.body;

    var loginData = {
        "empid":data.empid,
        "fname":data.firstName,
        "lname":data.lastname,
        "phone":data.phone,
        "address":data.address ,
        "dob":data.dob,
        "city":data.city
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