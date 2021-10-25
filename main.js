// imports
import reader from './helpers.js';
import fs from 'fs';


// gloabals
const dir = process.argv.slice(2)[0];

const dirT = "C:\\Users\\sajmc\\OneDrive\\Documents\\Projects\\StockmarketAPI\\R&D\\testCompanyFacts"

// check if dir exists
if(dirT.length > 0){
    try {
        const files = fs.readdirSync(dirT);
    
        // files object contains all files names
        // log them on console
        files.forEach(file => {
            console.log(file);
        });
    
    } catch (err) {
        console.log(err);
    }
}else{
    throw new Error('Command line arg has not been given!')
}