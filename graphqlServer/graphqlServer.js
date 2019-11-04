import { GraphQLServer } from "graphql-yoga"
import concatFolderFiles from "./util/concatFolderFiles"
import path from "path"

const resolvers = {}
const typeDefs = concatFolderFiles(path.resolve(__dirname, "./typeDefs"))
const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() =>
  console.log("🚀  Apollo server is running on localhost:4000")
)
