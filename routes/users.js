const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/users',
  handler: (request, response) => {
    Models.User.findAll().then((result => result.map(row => ({
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
    }))))
      .then((users) => {
        response({
          data: users,
          statusCode: 200,
        });
      })
      .catch((error) => {
        response({
          data: `Error in fetching data => ${error}`,
          statusCode: 500,
        });
      });
  },
},
{
  method: 'POST',
  path: '/users/new',
  handler: (request, response) => {
    Models.User.create({
      firstName: request.payload.firstName,
      lastName: request.payload.lastName,
    }).then((result) => {
      response({
        data: {
          id: result.dataValues.id,
          firstName: result.dataValues.firstName,
          lastName: result.dataValues.lastName,
        },
        statusCode: 201,
      });
    })
      .catch((error) => {
        response({
          data: `Error has occurred => ${error}`,
          statusCode: 500,
        });
      });
  },
},
{
  method: 'POST',
  path: '/users/delete',
  handler: (request, response) => {
    Models.User.destroy({
      where: {
        lastName: request.payload.lastName,
        firstName: request.payload.firstName,
      },
    }).then((result) => {
      response({
        statusCode: 200,
        result,
      });
    })
      .catch((error) => {
        response({
          data: `Error has occurred => ${error}`,
          statusCode: 500,
        });
      });
  },
},
{
  method: 'POST',
  path: '/users/update',
  handler: (request, response) => {
    Models.User.update(
      request.payload.new,
      {
        where: request.payload.old,
      },
    ).then((result) => {
      response({
        statusCode: 200,
        result,
      });
    })
      .catch((error) => {
        response({
          data: `Error has occurred => ${error}`,
          statusCode: 500,
        });
      });
  },
}];
