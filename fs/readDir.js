const fs = require('fs'); //fs signigica file system. É uma API nativa do file system
fs.readdir(__dirname, (err, data)=>{
    if(err) throw err;

    data.forEach((files)=>{
        console.log(__dirname + '\\' + files);
    })
})