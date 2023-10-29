import { Schema, model } from "mongoose";

const AdminSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
},
{timestamps: true}
)

const Admin = model("Admin", AdminSchema);
export default Admin;