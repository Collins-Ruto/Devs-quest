import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true}, 
    email: { type: String, required: true},
    github: String,
    password: { type: String},
    bookmarks: [{
        type: String,
        id: String,
    }],
    image: String,
    about: String,
    website: String,
    twitter: String,
    posts: [{ type: String, id: String}]
})

const UserData = mongoose.model('UserData', userSchema);

export default UserData