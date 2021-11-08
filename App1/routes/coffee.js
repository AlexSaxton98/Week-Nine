const router = require("express").Router()
const { allCoffee, oneCoffee, editCoffee, deleteCoffee, deleteAllCoffee, addCoffee} = require("../utils/coffee")

//Routes operating on ALL coffee resources
router.get("/", async (req, res) => res.status(200).json({msg: "All Coffee", data: await allCoffee()}));
router.post("/", async (req, res) => res.status(201).json({msg: "Add Coffee", data: await addCoffee(req.body)}));
router.delete("/", async (req, res) => res.status(200).json({msg: "Delete All Coffee", data: await deleteAllCoffee()}));

//Routes operating on ONE specific coffee resource
router.get("/:id", async  (req, res) => res.status(200).json({msg: "One Coffee", data: await oneCoffee(req.params.id)}));


 router.put("/:id", async (req, res) => res.status(201).json({msg: "Update one Coffee", data: await editCoffee(req.params.id, req.body.name, req.body.origin, req.body.strength)}));


router.delete("/:id", async (req, res) => res.status(200).json({msg: "Delete One Coffee", data: await deleteCoffee(req.params.id)}));


module.exports = router;