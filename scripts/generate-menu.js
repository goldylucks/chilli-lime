const fs = require('fs')
const path = require('path')
const GoogleSpreadsheets = require('google-spreadsheets')
const dataFilePath = path.resolve(__dirname, '..', 'src', 'data.js')

GoogleSpreadsheets({
  key: '1mtRMPy3hlTfQvb0Pi5p7fdBTMApc5faTn-PsR3mX4ZQ',
}, function(err, spreadsheet) {
  if (err) {
    console.error('init err', err)
    return
  }
  spreadsheet.worksheets[0].rows({}, (err, rows) => {
    const data = rows
      .map(({ name, description, price, image }) => {
        return { name, description, price, image }
      })

    fs.writeFileSync(dataFilePath, "export default " + JSON.stringify(data, null, 2))
    console.log('written data file to ' + dataFilePath)
  });
});
