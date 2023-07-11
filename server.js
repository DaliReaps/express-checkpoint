const express=require("express")
const app=express()
const port=5000
const dat = new Date
const day = dat.getDay()
const hour=dat.getHours()
console.log(day)
console.log(dat)
console.log(hour)

const users=require("./users")

 const midware=(req,res,next)=>{
    (day<=5 && day>=1 && hour>=9 && hour<=23) ? next() : res.send("The web application is only available during working hours (Monday to Friday,  from 9 to 17)")
 }
 app.use(express.json())
 app.use(midware);
 app.use('/api',require("./route/userRoute"))
 app.use(express.static("view"))
app.listen(port, (err)=> err? console.log(err) : console.log("server is running in port:",port))


app.get("/home",(req,res)=>{
    res.status(200).sendFile(__dirname+"/view/home.html")})

app.get("/our-services",(req,res)=>{
        res.status(200).sendFile(__dirname+"/view/our-services.html")})

app.get("/contact-us",(req,res)=>{
            res.status(200).sendFile(__dirname+"/view/contact-us.html")})