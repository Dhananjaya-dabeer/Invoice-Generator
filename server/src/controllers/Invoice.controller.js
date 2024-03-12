import mongoose from "mongoose"
import { asyncHandler } from "../utils/asynchandler.js"
import { generateInvoices } from "../invoice/Invoice.js"


export const health = asyncHandler(async (req, res) => {
    res.json({
        status: "server is up and running"
    })
})

export const invoice = asyncHandler(async (req, res) => {
    const doc =  generateInvoices();
    const pdfBuffer = doc.output();

    res.setHeader("Content-Disposition", "attachment; filename=invoice.pdf");
    res.setHeader("Content-Type", "application/pdf");

    res.send(pdfBuffer)
})  

