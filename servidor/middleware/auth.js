const auth = (req, res, next)=> {
    const token = req.headers.token
    console.log ("Sigo vivo! :D")
    if (!token){
        res.status(400).json({data: "No tienes permiso para pasar"})
        return
    }
    next()
}

export default auth