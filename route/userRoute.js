const express=require("express")
const app=express()
const users=require("../users")
const router=express.Router()

router.get("/",(req,res)=>{
    res.status(200).json(users)
    })
    router.post("/",(req,res)=>{
        const newusers= [...users,req.body]
        res.status(201).json(newusers)
    })
    router.put("/:id",(req,res)=>{
        const newusers= users.map(user=>req.params.id==user.id? {...user,...req.body}: user)
        res.status(200).json(newusers)
    })
    router.delete("/:id",(req,res)=>{
        const newusers= users.filter(user=>req.params.id!=user.id)
        res.status(200).json(newusers)
    })
    module.exports=router