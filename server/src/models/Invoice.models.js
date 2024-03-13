import mongoose from "mongoose"

const invoiceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: [{ type: String }],
        required: true
    },
    qty: {
        type: [{ type: Number }],
        required: true
    },
    rate: {
        type: [{ type: Number }],
        required: true
    }
}, {timestamps: true})

export const Invoice = mongoose.model("Invoice", invoiceSchema)