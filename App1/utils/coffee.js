const Coffee = require("../models/coffee")

const allCoffee = async () => await Coffee.findAll({});


const addCoffee = async (coffee) => {
     const object = await Coffee.create(coffee)
     console.log(object)
     return object
    };
const deleteAllCoffee = async () => await Coffee.destroy({truncate: true});


const oneCoffee = async (id) =>  await Coffee.findAll({where: { id }});


const editCoffee = async (id, name, origin, strength) => {
    const coffee = await Coffee.findOne({where: { id }})
    return Coffee.update({name: name || coffee.name, origin: origin || coffee.origin, strength: strength || coffee.strength}, {where: { id }})
};


const deleteCoffee = async (id) => await Coffee.destroy({where: { id }});


module.exports = {
    allCoffee,
    oneCoffee,
    addCoffee,
    editCoffee,
    deleteCoffee,
    deleteAllCoffee
}