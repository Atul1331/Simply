const express = require("express")
const { connectDB, Note } = require("./db/index")
const { noteSchema } = require("./schema/index")

const app = express()
const PORT = 3000

app.use(express.json())

app.post("/", async (req, res) => {
    const data = req.body
    const validateData = noteSchema.safeParse(data)
    if(!validateData.success){
        res.json({
            msg: "Input validation failed.",
            error: validateData.error.error
        })
    }

    try{
        const note = new Note(validateData.data)
        await note.save()
        res.json({
        msg: "Note added."
    })
    }
    catch(error){
        res.json({
            msg: "Couldn't add note."
        })
    }
    
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