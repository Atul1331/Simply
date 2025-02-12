const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = () => mongoose.connect(process.env.MONGO_URL)

const noteSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: {
        type: [String],
        default: ["Personal"]
    }
}, {
    timestamps: true
})

const Note = mongoose.model('Note', noteSchema)

module.exports = {
    connectDB,
    Note
}