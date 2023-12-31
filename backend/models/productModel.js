const mongoose = require("mongoose");
const moment = require('moment-timezone');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Product Name"],
        trim:true,
        unique:true
    },
    description:{
        type:String,
        required:[true, "Please Enter Product Description"]
    },
    price:{
        type:Number,
        required:[true, "Please Enter Product Price"],
        maxLength:[8, "Price Cannot Exceed 8 Characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:{
        public_id:{
            type:Array,
            required:[true, "Please Enter Product Images"]
        },
        url:{
            type:Array,
            required:[true, "Please Enter Product Images"]
        }
    },
    category:{
        type:String,
        required:[true, "Please Enter Product Category"],
    },
    stock:{
        type:Number,
        require:[true, "Please Enter Product Stock"],
        maxLength:[4, "Stock Cannot Exceed 4 Characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:[true, "Please Enter Your Name"]
            },
            rating:{
                type:Number,
                required:[true, "Please Enter Your Rating"]
            },
            comment:{
                type:String,
                required:[true, "Please Enter Your Review"]
            }
        }
    ],
    postCreatedAt:{
        type:String,
        default:moment.tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss') // Converting The UTC Timezone To IST Timezone
    }
});

productSchema.pre('save', function(next) { // Converting The UTC Timezone To IST Timezone
    if (this.isNew || this.isModified('postCreatedAt')) {
        this.postCreatedAt = moment.tz(this.postCreatedAt, 'Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');
    }
    next();
});

module.exports = mongoose.model("Product", productSchema);