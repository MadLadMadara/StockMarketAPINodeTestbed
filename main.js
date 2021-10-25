// imports
const fs = require('fs');
// gloabals
const args = process.argv.slice(2);

if(args.length > 0){
    if (fs.existsSync(args[0])) {
        console.log('Directory exists!');
    } else {
        throw new Error('Given Directory dose not exists!')
    }
}else{
    throw new Error('Command line arg has not been given!')
}