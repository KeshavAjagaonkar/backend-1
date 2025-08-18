import mongoos , {Schema} from "mongoose"


const userSchema = new Schema(
    {
    username: {
        type: String,
        required: true,
        trim: true,
        unique:true,
        lowercase: true,
        index:true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        lowercase: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index:true
    },
    avatar: {
        type: String,//cloudinary url
        required: true,
    },
    coverImage: {
       type:String
    },
    watchHistrory: {
        type: Schema.Types.ObjectId,
        ref:"Video"
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }, 
    refreshToken: {
        type:String
    }
}, { timestamps: true });


export const User = mongoose.model("User", userSchema);