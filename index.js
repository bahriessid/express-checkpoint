const express=require('express')
const app=express()
const port=5000






app.listen(port,err=>{err? console.log(err):console.log(`Server is running on ${port}`)})