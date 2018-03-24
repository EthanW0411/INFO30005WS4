const faker = require('faker');

const posts = [];

for(var i = 0; i < 10; i++){
    var name = faker.name.firstName();
    var email = faker.internet.email();

    posts.push({
        name: name,
        email: email
    });
}

module.exports = posts;