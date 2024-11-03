const { setup, Router, renderPage } = require("saturjs")
const router = Router()

router.get("/", renderPage("index"))
router.get("/todo", renderPage("todo/index"))
router.get("/counter", renderPage("counter/index"))
router.get("/image-gallery", renderPage("imageGallery/index"))

module.exports = setup({
    appRouter: router,
})