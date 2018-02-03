module.exports = [{
  method: 'GET',
  path: '/users',
  handler: (request, reply) => reply('Success'),
},
{
  method: 'POST',
  path: '/users/new',
  handler: (request, reply) => reply('Success'),
}];
