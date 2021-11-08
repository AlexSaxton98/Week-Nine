const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(404);
    res.send("Stay the patient course\nOf little worth is your ire\nThe server is down")
})

module.exports = router