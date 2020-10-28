const fs = require('fs');

fs.readFile('data.json', (err, data) => {
    if(err) {
        console.log('File has not been read.')
        return
    }
    try {
        console.log("Data has been read.")
        const readable = JSON.parse(data);
        console.log(readable)
    } catch (err) {
        console.log('ERROR.');
    }
})