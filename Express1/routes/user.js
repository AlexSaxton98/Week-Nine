const router = require("express").Router();
const { addUser, getUser, editUser, getUsers, deleteUser} = require("../utils/user")
  
  router.get("/", (req, res) => {
    res.status(200);
    res.json(getUsers());
  });
  
  router.post("/", (req, res) => {
    addUser(req.body);
    res.status(201).json({ body: req.body });
  });
  
  router.get("/:id", (req, res) => {
    res.status(200);
    res.json(getUser(req.params.id));
  });
  
  router.put("/:id", (req, res) => {
    const user = { id: req.params.id, ...req.body };
    editUser(user, req.params.id);
    res.status(201).json({user});
  });
  
  router.delete("/:id", (req, res) => {
    deleteUser(req.params.id)
    res.status(200).json({ msg: `Deleted User ${req.params.id}` });
  });
  
  router.get("/:id/orders", (req, res) => {
    res.status(200);
    res.json(getUser(req.params.id).orders);
  });
  
  router.get("/:id/orders/:orderId", (req, res) => {
    try {
      res.status(200).json(getUser(req.params.id).orders.find(findOrder));
    } catch (error) {
      res.status(404).json({msg: `user: ${req.params.id} not found, or ${req.params.orderId} not found`});
    }
  });

module.exports = router