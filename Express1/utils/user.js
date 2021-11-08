

let users = [
    {id: 1, name: "Larry", orders: [ { id: 8, item: "Soap" }, { id: 31, item: "Steak" }]},
    {id: 2, name: "Jeff", orders: [ { id: 12, item: "T-Shirt" }, { id: 19, item: "Batteries" }]},
    {id: 3, name: "Bob", orders: [ { id: 7, item: "Mug" }, { id: 42, item: "Ice Cream" }]}
  ];
  

  const addUser = (user) => users.push(user);
  const editUser = (user, id) => {
      users = users.filter(user => user.id != id);
      users.push(user)
  };
  const getUser = (id) => users.find(user => user.id == id);
  const getUsers = () => users;
  const deleteUser = (id) => users = users.filter(user => user.id != id);

  module.exports = {
      addUser,
      editUser,
      getUser,
      getUsers,
      deleteUser
  }