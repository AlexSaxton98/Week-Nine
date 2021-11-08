const setRequestDateTime = (req, res, next) => {
    req.logMessage = `${req.path}: ${new Date()}`;
    next()
}

const logRequestDateTime = (req, res, next) => {
    console.log(req.logMessage)
    next()
}

const handleError = (err, req, res, next) => {
    const msg = "A crash reduces <br> your expensive computer <br> to a simple stone."
    res.status(500).json({msg})
}
const handleIndexError = (err, req, res, next) => {
    const msg = "Whoops, something fucked up"
    res.status(500).json({msg})
}

module.exports = {
    setRequestDateTime,
    logRequestDateTime,
    handleError,
    handleIndexError
}