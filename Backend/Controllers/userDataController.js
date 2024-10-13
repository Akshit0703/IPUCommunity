const userDataModel = require('../Models/userData')
const mongoose = require('mongoose')

//user

const createUser = async (req,res)=>{
    const{Username, Email_Id, Phone, College, Course, Branch, Year}=req.body
    try{
        const userData = await userDataModel.create({Username, Email_Id, Phone, College, Course, Branch, Year})
        res.status(200).json(userData)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}
 //Get all user
const getAllUser = async(req,res) =>{
    try{
    const userData = await userDataModel.find({}).sort({createdAt: -1})

    res.status(200).json(userData)}
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//Get a single user
const getUser = async(req,res) => {
    try{
    const{id} = req.params
    const userData = await userDataModel.findById(id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'User does not exist'})
    }
    
    if(!userData){
        return res.status(404).json({error: 'This user doesn\'t exist'})
    }
    res.status(200).json(userData)}
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//Delete a user
const deleteUser = async(req,res) => {
   try{
    const{id} = req.params
   
   if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error: error.message})}  
   
    const userData= await userDataModel.findOneAndDelete({_id: id})

    if(!userData){
    return res.status(404).json({error: 'This user doesn\'t exist'})}
   
    res.status(200).json(userData)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//Update user
const updateUser = async(req,res) => {
    try{
    const{ id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error: error.message})
    }  
    
    const userData= await userDataModel.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!userData){
     return res.status(404).json({error: 'This user doesn\'t exist'})
    }
    
    res.status(200).json({userData})
    }
    catch(error){
    res.status(400).json({error: error.message})
    }
}

module.exports = {
    createUser,
    getUser,
    getAllUser,
    deleteUser,
    updateUser,
}