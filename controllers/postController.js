const users = require('../models/db');

module.exports.homePage = function(req, res){
    res.send('Home Page');
};
module.exports.sayGoodbye = function(req, res) {
    res.send("Goodbye");
};

module.exports.fetchUsers= function(req, res) {
    res.send(users);
};

module.exports.fetchUsersById = function(req, res) {
    const userId = req.params.id;
    res.render('user_templates', {user: users[userId]});
};