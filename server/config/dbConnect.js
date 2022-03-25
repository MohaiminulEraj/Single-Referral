import mongoose from 'mongoose';
import colors from 'colors';

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            // strictPopulate: false,
            // useCreateIndex: true,
            // useUnifiedTopology: true,
            // useFindAndModify: true,
            // bufferCommands: false,
            // bufferMaxEntries: 0,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log(`${error.message}`.red.underline.bold);
        process.exit(1);
    }

}

export default dbConnect;