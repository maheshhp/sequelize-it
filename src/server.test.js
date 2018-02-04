const Server = require('./server');
const Routes = require('../routes');

describe('Testing the Hapi server that processes the requests', () => {
  test('Should contain correct number of routes', () => {
    expect(Routes.length).toBe(Server.table('localhost')[0].table.length);
  });
});
