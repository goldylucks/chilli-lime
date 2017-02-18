const fs = require('fs')
const path = require('path')
const imagesDir = path.resolve(__dirname, '..', 'src', 'images')
const outputPath = path.resolve(__dirname, '..', 'src', 'imagesData.js')

const result = fs.readdirSync(imagesDir)
  .reduce((data, file) => {
    return data.concat({
      file,
      price: 0,
      description: 'some description',
    })
  }, [])

fs.writeFileSync(outputPath, "export default " + JSON.stringify(result, null, 2))

console.log('written file to ' + outputPath)
