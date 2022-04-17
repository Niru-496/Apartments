const express = require("express")
const { signupmodel } = require("./models/signupmodue")
const router = express.Router()



router.post("/", async (req,res) => {
    try {
        const userinfo = await signupmodel.create(req.body)
        return res.send(userinfo).status(200)
    } catch (error) {
        return res.send(error.message).status(501)
    }
})


module.exports = {router}

