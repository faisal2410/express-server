exports.greetings=async(req,res)=>{
    res.send(`<h1>Hello </h1>`)
}


exports.overview=async(req,res)=>{
    res.json({status:"success",message:"We love express"})
}
