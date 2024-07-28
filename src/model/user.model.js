import mongoose,{Schema, model} from "mongoose";
import bcrypt from 'bcrypt'
const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    }
},{timestamps: true});

userSchema.pre('save', async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10)
    next();
})

userSchema.method.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password,this.password);
}

export const User = model("User",userSchema)