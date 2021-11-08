const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200);
    res.json({params: req.query});
});

module.exports = router;