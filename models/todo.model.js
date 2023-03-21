import { Schema, model } from "mongoose"

const TodoSchema = new Schema({
    title: {
        type: String, 
        required: true,
        unique: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: false,
    versionKey: false
});

const Todo = model("Todo", TodoSchema);
export default Todo;