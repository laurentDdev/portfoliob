import { Document, Schema, model } from "mongoose";
import bcrypt from "bcrypt"


interface User extends Document {
    email: string;
    password: string;
}

const UserSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})

UserSchema.pre("save" , function(next) {
    const hashedPassword = bcrypt.hashSync(this.password, 10);
    this.password = hashedPassword;
    next();
})

const UserModel = model<User>("User", UserSchema);


export default UserModel;