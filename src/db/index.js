import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const ConnectDB = async () => {
    try {
        const connectionInstace = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`\n mongoDB connectecd !! DB host : ${connectionInstace}`);
    }
    catch(error){
        console.log("mongoose connection error", error);
        process.exit(1)
    }
}

export default ConnectDB;
