/**
 * @fileoverview Mongoose schema for the 'recordSchema' subdocument
 * @exports mongoose.model
 * @author Sam McRuvie
 */
// ----Mongoose package/imports
import mongoose from 'mongoose'

/**
 * @class recordSchema
 * @description Mongoose schema for 'record' subdocument
 * @type mongoose.Schema
 */
const recordSchema = new mongoose.Schema({
    start: {
        type: Date,
        require: "Start date is required for all records"
    },
    end: {
        type: Date,
        require: "End date is required for all records"
    },
    val: {
        type: Number,
        require: "Value is required for all records"
    },
    accn: {
        type: String,
        require: "account is required for all records"
    },
    fy: {
        type: Number,
        require: "Financial year is required for all records"
    },
    fp: {
        type: String,
        require: "Financial quater is required for all records"
    },
    form: {
        type: String,
        require: "Form type is required for all records"
    },
    filed: {
        type: Date,
        require: "Date form was filed is required for all records"
    },
    frame: {
        type: String,
        require: "Frame is required for all records"
    }
})

export default mongoose.model('Record', recordSchema)
