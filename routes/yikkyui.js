userRouter.delete("/:id", async(req, res)=>{
    try{
       
        let result=await user.findByIdAndDelete(req.params.id);
        res.send({msg:"user is delet"})
    }catch (error){
        console.log(error)
    }
})










