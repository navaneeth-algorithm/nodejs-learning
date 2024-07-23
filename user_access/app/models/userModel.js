const users  = [{
    id:1,
    name:'Navaneeth',
    password:'navaneeth@123',
    email:'navaneeth@gmail.com'
}];

function validateUser(email,password){
    //validate user by checking the data
    // if present return
    const user = users.find((user)=>user.email===email && user.password===password);
    return user;
}

module.exports = {validateUser}