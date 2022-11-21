const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt  = require('jsonwebtoken');

exports.SignInUser = (req, res) => {
    const userLoggingIn = req.body;
    User.findOne({username:userLoggingIn.name})
    .then(dbUser => {
        if(!dbUser){
            return res.json({
                message: "Invalid Username or Password"
            })
        }
        bcrypt.compare(userLoggingIn.password, dbUser.password)
        .then(isCorrect =>{
            if(isCorrect){
                const payload = {
                    id: dbUser._id,
                    username : dbUser.username,
                }
                console.log(payload);
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {expiresIn: 86400},
                    (err, token) => {
                        // console.log(err);
                        if(err) return res.json({message: err});
                        return res.json({
                            message: "Success",
                            token: "Bearer"+token
                        });
                    }
                )
            } else{
                return res.json({
                    message: "Invalid Username or Password"
                })
            }
            
        })
    })
}

exports.SignUpUser = async (req, res) => {

    // console.log("--------------------------------");
    // console.log(req.body);
    const user = req.body;
    const takenUsername = await User.findOne({username: user.name})
    const takenEamil = await User.findOne({email:user.email});

    if(takenUsername || takenEamil){
        console.log('already')
        res.json({message: "Username or email has already been taken"})
    } else {
        console.log('register');
        user.password = await bcrypt.hash(req.body.password, 10)

        const dbUser = new User({
            username: user.name.toLowerCase(),
            email:user.email.toLowerCase(),
            password: user.password
        })

        dbUser.save();
        
        res.json({message: "Success"});


    }
    
};
