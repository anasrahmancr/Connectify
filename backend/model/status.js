import { Schema, model, mongoose } from "mongoose";

const statusSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    image: {type: Array},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now },
})

const Status = model("Status", statusSchema);
export default Status;
