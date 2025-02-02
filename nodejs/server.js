import express from "express"
import cors from "cors"
import dotnev from "dotenv"
dotnev.config()
// const { GoogleGenerativeAI } = require("@google/generative-ai");
import {GoogleGenerativeAI} from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app = express()
app.use(express.json())
app.use(cors())





async function Propmt(value){
    const result = await model.generateContent(value);
    return result.response.text()
// console.log(result.response.text());

}
// const prompt = "Explain how AI works";
// Propmt(prompt)


app.listen(5100 , ()=>{
    console.log("post listen on 5100")
})

app.post("/getinfo" , async(req ,res)=>{
    const {value} = req.body
    const data = await Propmt(value)
    res.json({message:data})


})
app.get("/get1" , async(req ,res)=>{
    // const {value} = req.body
    const val = "Give a simple Python coding tip suitable for children aged 8-12. Use easy words and examples. provide the assignemt of python basic"
    const data = await Propmt(val)
    res.json({message:data})


})
app.get("/get2" , async(req ,res)=>{
    // const {value} = req.body
    const val = "Explain Python concepts like a university professor, using simple examples. and in last provide an python basic assigment"
    const data = await Propmt(val)
    res.json({message:data})


})
app.get("/get3" , async(req ,res)=>{
    // const {value} = req.body
    const val = "Explain Python concepts like a fun pirate. Use pirate language and adventure themes. and also provide the python basic assignment"
    const data = await Propmt(val)
    res.json({message:data})


})
app.get("/get4" , async(req ,res)=>{
    // const {value} = req.body
    const val = "Explain Python concepts like a robot, in a logical and structured way. and also provide the basic  assigment of python"
    const data = await Propmt(val)
    res.json({message:data})


})
