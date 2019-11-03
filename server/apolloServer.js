import { GraphQLServer } from "graphql-yoga"
import fs from "fs"
import path from "path"

const typeDefs = fs.readFileSync(
  path.resolve(__dirname, "./typeDefs.graphql"),
  "utf-8"
)

const resolvers = {}

const server = new GraphQLServer({ typeDefs, resolvers })

console.log({ server })
// server.start(() =>
//   console.log("🚀  Apollo server is running on localhost:4000")
// )
