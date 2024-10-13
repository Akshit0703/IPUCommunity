const postDataModel = require('../Models/postData')
const mongoose = require('mongoose')


//Create Post
const createPost = async(req,res) => {
     const{Title,Content}=req.body
     try{
        const postData = await postDataModel.create({Title,Content})
        res.status(200).json(postData)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const editPost = async(req,res) => {
    try{
        const{ id } = req.params
        
        if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: error.message})
        }  
        
        const postData= await postDataModel.findOneAndUpdate({_id: id}, {
            ...req.body
        })
    
        if(!postData){
         return res.status(404).json({error: 'This user doesn\'t exist'})
        }
        
        res.status(200).json({postData})
        }
        catch(error){
        res.status(400).json({error: error.message})
        }
}

const deletePost = async(req,res) => {
    try{
        const{id} = req.params
       
       if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: error.message})}  
       
        const postData= await postDataModel.findOneAndDelete({_id: id})
    
        if(!postData){
        return res.status(404).json({error: 'This user doesn\'t exist'})}
       
        res.status(200).json(postData)
        }
        catch(error){
            res.status(400).json({error: error.message})
        }
}

const getAllPost = async(req,res) =>{
    try{
    const postData = await postDataModel.find({}).sort({createdAt: -1})

    res.status(200).json(postData)}
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createPost,
    editPost,
    deletePost,
    getAllPost
}