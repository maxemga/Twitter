import { Document } from 'mongoose'

export default interface IUser extends Document {
    email: string,
    name: string,
    password: string,
    isActivated: boolean,
    code: number
}