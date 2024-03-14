const express = require("express")
const router = require("./routes/routes")
const fileUpload = require("express-fileupload")
const { cloudinary_connect } = require("./config/Cloudinary")

const app = express()
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}))
cloudinary_connect()
app.use("/api/v1", router)

app.listen(50000, () => {
    console.log(`server is up and running on port 50000`)
})