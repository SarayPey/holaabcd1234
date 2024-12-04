import express from 'express'
import auth from './middleware/auth.js'
import cors from 'cors';

const app = express()
app.use(cors())
app.use(express.json())
app.get('/ejemplo',(req, res)=>
    res.status(200).json({data: "nomnom12345wiiiii"})
)

app.use("/historial-chat",auth)

app.post('/login',(req, res)=>{
    console.log(req.body),
    res.status(200).json({token: "f4a3dce3-370c-4c3a-8749-459af84eea99"})
})

app.get('/registro',(req, res)=>
    res.status(200).json({data: "nomnom12345wiiiii"})
)

app.get('/perfil',(req, res)=>
    res.status(200).json({data: "nomnom12345wiiiii"})
)

app.get('/oc',(req, res)=>
    res.status(200).json({data: "nomnom12345wiiiii"})
)

app.get('/historial-chat',(req, res)=>
    res.status(200).json({data: "nomnom12345wiiiii"})
)
const words = [
    "hola", "qwerty", "jugo", "de", "manzana", "agua", "wiiiii", "no", "mimir", "a", "123", "nomnom", "mami", "aaaa", "gringos"
]
const getRandomMessage = (size) => {
    let output = ""
    for (let i = 0; i<size; i++) {
        const n = Math.floor(Math.random()*words.length)
        output = output + words[n] + " "
    }
const n = Math.floor(Math.random()*words.length)
return output
}

app.post('/historial-chat',(req, res) => {
    const randomMessage = getRandomMessage(3)
    console.log(randomMessage)
    const messageRandom = randomMessage;
    res.status(200).json({data: messageRandom})
}
)

app.get('/perfil-historias',(req, res)=>
    res.status(200).json({data: "nomnom12345wiiiii"})
)

app.get('/grupos',(req, res)=>
    res.status(200).json({data: "nomnom12345wiiiii"})
)

app.get('/config',(req, res)=>
    res.status(200).json({data: "nomnom12345wiiiii"})
)

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})

