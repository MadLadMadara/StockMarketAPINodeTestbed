// imports
import fs from 'fs';

import CompanyFacts from './models/facts/companyFacts.models.js';


// gloabals
//const dir = process.argv.slice(2)[0];

const dir = "C:\\Users\\sajmc\\OneDrive\\Documents\\Projects\\StockmarketAPI\\R&D\\testCompanyFacts"

// check if dir exists
if(dir.length > 0){
    try {
        const files = fs.readdirSync(dir);
        // files object contains all files names
        // log them on console
        files.forEach(file => {
            let fullFilePath = dir + "\\" + file;
            console.log(fullFilePath);
            try {
                const data = fs.readFileSync(fullFilePath, 'utf8');
                // parse JSON string to JSON object
                const JSONdata = JSON.parse(data);
                //use databse scheema
                let company = new CompanyFacts({
                    cik:JSONdata.cik,
                    entityName: JSONdata.entityName,
                    facts: {
                      dei: JSONdata.facts.dei,
                      USgaap: JSONdata.facts['us-gaap']
                    } 
                });
                console.log(company.facts.USgaap);

            } catch (err) {
                console.log(`Error reading file from disk: ${err}`);
            }
        });
    
    } catch (err) {
        console.log(err);
    }
}else{
    throw new Error('Command line arg has not been given!')
}