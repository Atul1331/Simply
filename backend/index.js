const express = require("express")
const { connectDB, Note } = require("./db/index")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send("Hello from simply backend")
})

app.listen(PORT, async () => {
    try{
        await connectDB();
        console.log("Connected to MongoDB database")
    }
    catch(error){
        console.log("Error!!! Couldn't connect to database")
    }
    finally{
        console.log("Application is running on PORT ", PORT)
    }
    
})