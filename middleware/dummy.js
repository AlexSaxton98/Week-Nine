const router = require("express").Router();
const { setRequestDateTime, logRequestDateTime, handleError } = require("./middleware")

router.use(setRequestDateTime)
router.use(logRequestDateTime)

router.get("/", (req, res) => {
    res.status(200).json({msg: "Dummy Route Worked"})
})

router.get("/error", (req, res, next) => {
    try{
        throw new Error("Something went wrong")
    } catch (error){
        next(error);
    }
});

router.use(handleError)

module.exports = router;