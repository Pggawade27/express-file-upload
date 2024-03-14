const Cloudinary = require("cloudinary").v2
const dotenv = require("dotenv")
dotenv.config()

exports.cloudinary_connect = () => {
    try {
        Cloudinary.config({
            cloud_name: process.env.cloud_name,
            api_key: process.env.api_key,
            api_secret: process.env.api_secret
        })
        console.log("Cloudinary connected")
    } catch (error) {
        console.log("error while connecting Cloudinary: ", error)
    }
}