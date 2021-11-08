const Coffee = require("../models/coffee");

const allCoffee = async () => await Coffee.find({})

const oneCoffee = async (id) => await Coffee.findById({_id: id});

const addCoffee = async (coffee) => await new Coffee(coffee).save()

const editCoffee = async (id, coffee) => await Coffee.findByIdAndUpdate({_id: id}, coffee);

const deleteCoffee = async (id) => await Coffee.deleteOne({_id: id});

const deleteAllCoffee = async () => await Coffee.deleteMany({});

module.exports = {
    allCoffee,
    oneCoffee,
    addCoffee,
    editCoffee,
    deleteCoffee,
    deleteAllCoffee
};