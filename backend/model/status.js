import { Schema, model, mongoose } from "mongoose";

const statusSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    image: {type: Array},
    caption: {type: String},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now },
})

const Status = model("Status", statusSchema); 
export default Status;
