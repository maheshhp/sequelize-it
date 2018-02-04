const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/users',
  handler: (request, response) => {
    Models.users.findAll().then((result => result.map(row => ({
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
    }))))
      .then((users) => {
        response({
          data: users,
          statusCode: 200,
        });
      });
  },
},
{
  method: 'POST',
  path: '/users/new',
  handler: (request, reply) => reply('Success'),
}];
