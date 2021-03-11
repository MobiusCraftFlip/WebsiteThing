const fs = require("fs")
const path = require("path")

const docsFolder = path.join(__dirname, "docs")

files = []

console.log(fs.readdirSync(docsFolder))

function scanDir(dir, currentDisplayDir) {
    const toReturn = []
    fs.readdirSync(dir).forEach((val) => {
        if (val.endsWith(".md")) {
            const minusMd = val.replace(".md", "")
            toReturn.push({
                label: minusMd,
                href: currentDisplayDir+minusMd
            })
        } else {
            toReturn.push({
                label: val,
                position: "left",
                items: scanDir(dir+"/"+val, currentDisplayDir+val+"/")
            })
        }
    })
    return toReturn
}

module.exports = scanDir(docsFolder, "/docs/")