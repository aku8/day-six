
const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    //get command hit on empty route ("/"), then do the following

    res.send("Users default path");

});
module.exports = router;
//If we use the require statement on this file,
//it will import this router.