const { jwt } = require('jsonwebtoken')

 const verify = (req, res, next) => {
    const token = req.headers["x-access-token"]?.split(' ')[1]
    if(token){
        console.log(token);
        jwt.verify(token, process.env.PASSPORTSECRET, (err,decoded) => {
            if(err) return res.json({
                isLoggedIn: false,
                message: "Failed To Authenticate"
            })
            req.user={};
            req.user.id=decoded.id
            req.user.username = decoded.username
            next()
        })
    }
    else{
        res.json({message: "Incorect Token Given", isLoggedIn : false})
    }
}

module.exports ={verify}