import mongoose from 'mongoose'

export const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://davedhruv863_db_user:556EBe38aKpio2Dd@cluster0.y0djexp.mongodb.net/SRMS");
        console.log("DB CONNECTED SUCCESSFULLY");
    } catch (err) {
        console.error(err);
    }
};