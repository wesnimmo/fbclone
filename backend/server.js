const express = require("express")
const mongoose = require('mongoose')
const fileUpload = require("express-fileupload");
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

const { readdirSync } = require("fs")
const app = express()
app.use(express.json())
app.use(cors())
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)))

//database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})
.then(() => console.log("database connected succesfully!"))
.catch((err)=> console.log("error connecting to mongodb"))

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}..`)
})