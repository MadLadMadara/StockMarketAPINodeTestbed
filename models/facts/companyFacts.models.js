/**
 * @fileoverview Mongoose schema for the 'companyFacts' DB collection
 * @exports mongoose.model
 * @author Sam McRuvie
 */
// ----Mongoose package/imports
import mongoose from 'mongoose'
import usgaapSchema from './subDocuments/usgaap.Schema.js'

/**
 * @class companyFacts
 * @description Mongoose schema for 'companyFacts' DB collection
 * @type mongoose.Schema
 */
const companyFactsSchema = new mongoose.Schema({
  "cik": {
    "type": "Number"
  },
  "entityName": {
    "type": "String"
  },
  "facts": {
    "dei": {
      "EntityCommonStockSharesOutstanding": {
        "label": {
          "type": "String"
        },
        "description": {
          "type": "String"
        },
        "units": {
          "shares": {
            "type": [
              "Mixed"
            ]
          }
        }
      },
      "EntityPublicFloat": {
        "label": {
          "type": "String"
        },
        "description": {
          "type": "String"
        },
        "units": {
          "USD": {
            "type": [
              "Mixed"
            ]
          }
        }
      }
    },
    "USgaap": {
      type: usgaapSchema
    }
  }
})

export default mongoose.model('CompanyFacts', companyFactsSchema)