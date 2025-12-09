<<<<<<< HEAD
import mongoose from 'mongoose';
=======
import mongoose from "mongoose";
>>>>>>> e23eb9ba502a25a5bbe3a8c2cbaea51051c75502

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
<<<<<<< HEAD
            bufferCommands: false
        }

        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, opts).then(mongoose => {
            return mongoose
        })
    }

    cached.conn = await cached.promise;
    return cached.conn
=======
            bufferCommands:false
        }

        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, opts).then(mogoose => {
            return mogoose;
        })
    }

    cached.conn = await cached.promise
    return cached.conn;
>>>>>>> e23eb9ba502a25a5bbe3a8c2cbaea51051c75502

}

export default connectDB;