const express = require('express')

const router = express.Router()

const {createUser,getUser,getAllUser,updateUser,deleteUser}= require('../Controllers/userDataController')

const {createPost, editPost, deletePost, getAllPost}=require('../Controllers/postDataController')

//user
{
router.post('/user',createUser) //working

router.patch('/user/:id',updateUser) //working

router .delete('/user/:id',deleteUser) //working

router.get('/user/:id',getUser) //working

router.get('/user',getAllUser) //woking




//feed
router.post('/feed',createPost) //working

router.patch('/feed/:id',editPost) //working

router.delete('/feed/:id',deletePost) //working

router.get('/feed',getAllPost) //working
}


module.exports = router  