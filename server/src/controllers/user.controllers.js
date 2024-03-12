import mongoose from "mongoose";
import { asyncHandler } from "../utils/asynchandler.js";
import User from "../models/user.model.js"

export const health = asyncHandler(async (req, res) => {
    return res.json({
        status: "server is up and running successfully"
    })
})

export const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const dupeVerification = await User.findOne({ email })
    if (dupeVerification) {
        return res.json({
            status: "failed",
            message: "User alreday exits with this email"
        })
    }

    const newUser = await User.create({ name, email, password })
    const token = newUser.generateAccessTokens()
    return res.json({
        status: "Success",
        message: "registered Successfully! login to proceed",
        name: newUser.name,
        token: token
    })

})

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const existingUser = await User.findOne({ email })

    if (!existingUser) {
        return res.json({
            status: "Failed",
            message: "You are not registered please register to proceed further"
        })
    }
    else if (await existingUser.isPasswordCorrect(password)) {
        const token = existingUser.generateAccessTokens()
        return res.json({
            status: "Success",
            message: `Hello ${existingUser.name}`,
            token: token

        })

    }
    else {
        return res.json({
            status: "Failed",
            message: "either email or password is wrong"
        })
    }
})