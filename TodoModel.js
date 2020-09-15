import Mongoose from "mongoose"

const todo = new Mongoose.Schema({
    description: String,
    done: Boolean, createdBy: String, createdDate: { type: Date, default: new Date() }
}, { collection: "todos" })

export default Mongoose.model("ToDos", todo);