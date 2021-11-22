// imports
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require('dotenv').config()

import fs from 'fs';
import mongoose from 'mongoose'
import CompanyFacts from './models/facts/companyFacts.models.js';

// gloabals
//const dir = process.argv.slice(2)[0];

//TODO: remove so command line args work insted
const dir = process.env.COMPANY_FACTS_FOLDER; 

// DB connection
try{
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'DatabaseAlpha' })
} catch (error){
    throw new Error(`unable to connect to database: ${process.env.MONGO_URL}\nError:${error}`)
} 

// check if dir exists
if(dir.length > 0){
    try {
        const files = fs.readdirSync(dir);
        // files object contains all files names
        // log them on console
        let allCompanyFacts = [];
        console.log("File reading started"); 
        files.forEach(file => {
            let fullFilePath = dir + "\\" + file;
            console.log(fullFilePath);
            try {
                // read file
                const data = fs.readFileSync(fullFilePath, 'utf8');
                // parse JSON string to JSON object
                const JSONdata = JSON.parse(data);
                //use databse scheema
                let company = {
                    cik:JSONdata.cik,
                    entityName: JSONdata.entityName,
                    facts: {
                        dei: JSONdata.facts.dei,
                        USgaap: JSONdata.facts['us-gaap'],
                        ifrsFull: JSONdata.facts['ifrs-full']
                    } 
                };
                allCompanyFacts.push(company); 
            } catch (err) {
                console.log(`Error reading file from disk: ${err}`);
            }
        });
        console.log("File reading compleated")
        console.log("DB Date uploaded started")
        await CompanyFacts.insertMany(
            allCompanyFacts
        ).then(()=>{
            console.log("DB Date uploaded compleated")
        }).catch((error)=>{
            console.log(error);
        }).finally(()=>{
            process.exit(1); 
        });
    } catch (err) {
        console.log(err);
    }
}else{
    throw new Error('Command line arg has not been given!')
}

