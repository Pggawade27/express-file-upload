const Cloudinary = require("cloudinary").v2

const fileUploader = async (file, folderName) => {
    return await Cloudinary.uploader.upload(file.tempFilePath, { folder: folderName })
}

exports.handleFile = async (req, res) => {
    const file = await req?.files?.file
    if (!file) {
        return res.status(403).json({ message: "please attached file" })
    }

    const path = __dirname + "/files/" + Date.now() + `.${file.name.split("/")[1]}`
    console.log(path)
    console.log(file)

    file.mv(path, (err) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ message: "internal server error" })
        }
        return res.status(201).json({ message: "file upload sucesfully" })
    })
}

exports.fileUpload = async (req, res) => {
    const file = req?.files?.file
    console.log(file)
    const supportedType = ["png", "jpg", "jpeg"]
    const isSupported = supportedType.includes(file?.name.split(".")[1].toLowerCase())
    console.log("isSupported", isSupported)

    if (!isSupported) {
        return res.status(400).json({ message: "file format not supported" })
    }

    try {
        const response = await fileUploader(file, "prac")
        console.log("response", response)
        res.status(201).json({ message: "file uploaded sucesfully", data: response.secure_url })
    } catch (error) {
        console.log("error occure", error)
        res.status(500).json({ message: "internal server error" })
    }
}
