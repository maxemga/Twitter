import mongoose, { Schema } from 'mongoose';
import  IUser  from './../interfaces/user'

const schema: Schema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true}, 
    password: {type: String, required: true},
    isActivated: {type: Boolean, require: true},
    code: {type: Number, require: true}
})

export default mongoose.model<IUser>('User', schema)