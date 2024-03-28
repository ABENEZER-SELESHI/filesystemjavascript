const fs = require('fs');


function filecreator(itachi) {
    if(fs.existsSync('./' + itachi)) {
        fs.rmdir('./' + itachi, (err) => {
            if(err) {
                console.log(err);
            }
            console.log('folder deleted')
        });
    }
    
    if(!fs.existsSync('./' + itachi)) {
        fs.mkdir('./' + itachi, (err) => {
            if(err) {
                console.log(err);
            }
            console.log('new folder created');
        });
    }
}


filecreator('newfolder');

fs.writeFile('./mytext.txt', 'a little bit of this, a little bit that', () => {
    console.log('file written');
})

fs.readFile('./mytext.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
})



