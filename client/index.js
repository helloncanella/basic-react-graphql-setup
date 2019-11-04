const http = require("http")
const express = require("express")
const path = require("path")
const _ = require("lodash")

const PORT = process.env.PORT || process.env.DEV_PORT || 3015
const app = express()

const httpServer = http.createServer(app)

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "app/build")))

app.get("*", (__, res) => {
  res.sendFile(path.join(__dirname + "/app/build/index.html"))
})

httpServer.listen(PORT, () => {
  console.log(`🚀  Server ready at http://localhost:${PORT}`)
})
