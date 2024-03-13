import mongoose from "mongoose"
import { asyncHandler } from "../utils/asynchandler.js"
import { generateInvoices } from "../invoice/Invoice.js"
import { Invoice } from "../models/Invoice.models.js"


export const health = asyncHandler(async (req, res) => {
    res.json({
        status: "server is up and running"
    })
})

export const invoice = asyncHandler(async (req, res) => {
    const {product, qty, rate, userid} = req.body;
    const  userId = userid && JSON.parse(userid)
   
    if(!product.length || !qty.length || !rate.length ){
        return res.json({
            status: "Failed",
            message: "Please iclude the fields"
        })
    }

    await Invoice.create({product, qty, rate,  userId})
    
    const doc =  generateInvoices(product, qty, rate);
    const pdfBuffer = doc.output();

    res.setHeader("Content-Disposition", "attachment; filename=invoice.pdf");
    res.setHeader("Content-Type", "application/pdf");

    res.send(pdfBuffer)
})  

export const invoiceInfo = asyncHandler((req, res) => {
    

} )