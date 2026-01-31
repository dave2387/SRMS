import mongoose from 'mongoose'

export const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("DB CONNECTED SUCCESSFULLY");
    } catch (err) {
        console.error(err);
    }
};