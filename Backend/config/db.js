import mongoose from 'mongoose'

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.Mongo_url);
        console.log("DB CONNECTED SUCCESSFULLY");
    } catch (err) {
        console.error(err);
    }
};