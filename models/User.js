import mogoose from 'mongoose';

const UserSchema = new mogoose.Schema({
    _id: { type: String, required:true },
    name: { type: String, required:true },
    email: { type: String, required:true, unique:true },
    imageUrl: { type: String, required:true },
    cartIems: { type: Object, default: {} }
}, {minimize: false});

const User = mogoose.models.user || mogoose.model('user', UserSchema);

export default User;