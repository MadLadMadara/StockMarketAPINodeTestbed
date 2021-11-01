/**
 * @fileoverview Mongoose schema for the 'companyFacts' DB collection
 * @exports mongoose.model
 * @author Sam McRuvie
 */
// ----Mongoose package/imports
import mongoose from 'mongoose'
import ifrsFullSchema from './subDocuments/ifrsFull.Schema.js'

/**
 * @class companyFacts
 * @description Mongoose schema for 'companyFacts' DB collection
 * @type mongoose.Schema
 */
const companyFactsSchema = new mongoose.Schema({
  cik: {
    type: Number,
    required: 'Company CIK Number is required',
    unique: true
  },
  symbol: {
    type: String,
    unique: true
  },
  entityName: {
    type: String,
    required: 'Company name is required'
  },
  updated: {
    type: Date, 
    default: Date.now
  },
  created: {
    type: Date,
    default: Date.now
  },
  ifrsfull: {
    type: ifrsFullSchema
  }
})

export default mongoose.model('CompanyFacts', companyFactsSchema)