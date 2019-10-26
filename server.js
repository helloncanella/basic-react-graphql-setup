import fs from "fs"
import http from "http"
import express from "express"
import path from "path"
import _ from "lodash"

const PORT = process.env.PORT || process.env.DEV_PORT || 3015
const app = express()

const httpServer = http.createServer(app)

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

httpServer.listen(PORT, () => {
  console.log(`🚀  Server ready at http://localhost:${PORT}`)
})
