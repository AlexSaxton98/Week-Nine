const router = require("express").Router();

const {allCoffee, oneCoffee, addCoffee, editCoffee, deleteCoffee, deleteAllCoffee} = require("../utils/coffee");

router.get("/", async (req, res) => res.status(200).json({msg: "Got All Coffee", data: await allCoffee()}));
router.delete("/", async (req, res) => res.status(200).json({msg: "Deleted all Coffee", data: await deleteAllCoffee()}))
router.post("/", async (req, res) => res.status(201).json({msg: "Added a Coffee", data: await addCoffee(req.body)}));

router.get("/:id", async (req, res) => res.status(200).json({msg: "Got a Coffee", data: await oneCoffee(req.params.id)}))
router.delete("/:id", async (req, res) => res.status(200).json({msg: "Deleted a Coffee", data: await deleteCoffee(req.params.id)}))
router.put("/:id", async (req, res) => res.status(201).json({msg: "Edited a Coffee", data: await editCoffee(req.params.id, req.body)}))


module.exports = router;