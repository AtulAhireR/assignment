exports.fun = function(app){
    
    var demo = require('../controllers/loginController.js')
    app.get('/login',demo.getLogin);
    app.post('/register',demo.getRegister);
}