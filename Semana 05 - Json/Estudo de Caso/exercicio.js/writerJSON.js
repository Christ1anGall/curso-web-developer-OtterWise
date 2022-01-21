import fs from 'fs'

const saveJSON = (info, fileName) => {
    const parsedInfo = JSON.stringify(info)
    fs.writeFileSync(fileName, parsedInfo)
}

export default saveJSON