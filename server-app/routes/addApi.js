const express = require('express');
const router = express.Router()
const { addTwoNumber } = require("../controllers/profile");

router.post("/api/addNumber",addTwoNumber);

module.exports =  router;