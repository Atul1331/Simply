const zod = require("zod")

const noteSchema = zod.object({
    title: zod.string().min(1,"Title cannot be empty.").max(50, "Title cannot exceed length 50."),
    description: zod.string().min(1,"Description cannot be empty."),
    tags: zod.array(zod.string()).optional()
})

module.exports = {
    noteSchema
}