/**
 * @fileoverview Mongoose schema for the 'companyFacts' DB collection
 * @exports mongoose.model
 * @author Sam McRuvie
 */
// ----Mongoose package/imports
import mongoose from 'mongoose'

/**
 * @class companyFacts
 * @description Mongoose schema for 'companyFacts' DB collection
 * @type mongoose.Schema
 */
const companyFactsSchema = new mongoose.Schema({
  cik: {
    type: Number,
    required: 'Company CIK Number is required'
  },
  entityName: {
    type: String,
    required: 'Company name is required'
  }
})

export default mongoose.model('Product', companyFactsSchema)