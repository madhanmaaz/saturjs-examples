const express = require("express")
const saturjs = require("saturjs")

const app = express()
app.use(express.static(__dirname + "/public"))
saturjs.setup(app, {
    dev: true,
    version: require("./package.json").version
})

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/counter", (req, res) => {
    res.render("counter/Main")
})

app.get("/todo", (req, res) => {
    res.render("todo/Main")
})

app.get("/image-gallery", (req, res) => {
    res.render("imageGallery/Main", {
        data: require("./imageData")
    })
})

saturjs.errorHandler(app)
app.listen(3000)