const jwt = require('jsonwebtoken');
const Users = require('../models/userModel');

//Guard

module.exports.verifyUser = function(req,res,next){

    try{
        // we have to recieve the token first from client
        const token = req.headers.authorization.split(" ")[1];
        // it tries to verify the token provided by client
        const data = jwt.verify(token, 'anysecretkey');


        // User id is in data now...
        Users.findOne({id :data.YourId})
        .then(function(result){

            // apparently all the data of the logged in user is now available in result
            req.userData = result;
            next()
        })

        .catch(function(e){
            res.status(401).json({error : e})
        })
        
    }

    catch(e){
        res.status(401).json({error : e})
    }

}



module.exports.verifyAdmin =  function(req, res, next){
    if(!req.userData){
        return res.status(401).json({message : "Unauthorized!!"})
    }
    else if(req.userData.userType!=='Admin'){
        return res.status(401).json({message : "Unauthorized!!"})
    }
    next();
}


