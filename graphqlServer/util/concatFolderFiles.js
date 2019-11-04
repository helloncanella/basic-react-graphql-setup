import dir from "node-dir"
import fs from "fs"

/** concat all files from a specific folder */
export default function concatFolderFiles(folder) {
  const files = dir.files(folder, { sync: true })

  return files.reduce(
    (acc, file) => acc + fs.readFileSync(file, "utf-8") + "\n",
    ""
  )
}
