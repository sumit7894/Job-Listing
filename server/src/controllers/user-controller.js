const UserService = require('../services/user-service');
const {StatusCodes} = require('http-status-codes')
const userService = new UserService();

const signup = async (req,res)=>{
    try{
        const response = await userService.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
    });
    return res.status(StatusCodes.OK).json({
        success:true,
        message:"Successfully created the user",
        userName:response[0],
        userToken:response[1],
        err:{}
    })
}   catch(error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:error.message,
        data:{},
        err:error.explanation
    })}
}
const login = async (req,res) =>{
    try {
        const response = await userService.login({
            email: req.body.email,
            password:req.body.password
        })
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Successfully Logged In",
            userName:response[0],
            userToken:response[1],
            err:{}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:error.message,
            data:{},
            err:error.explanation
        })
    }
}
module.exports ={
    signup,
    login
}