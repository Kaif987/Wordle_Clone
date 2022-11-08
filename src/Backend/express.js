const express = require("express")
const app = express()
const data = require("./db.json")

const server = app.get("/solution", (req, res) =>{
    res.header({"Content-Type" : "Application/json"})
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000")
    res.send(JSON.stringify(data))
})

server.listen(3001, () =>{
    console.log("Server now running on port 3001")
})