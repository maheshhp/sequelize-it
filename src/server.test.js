const Server = require('./server');
const Routes = require('../routes');

describe('Testing the Hapi server that processes the requests', () => {
  test('Should contain correct number of routes', () => {
    expect(Routes.length).toBe(Server.table('localhost')[0].table.length);
  });
  test('Should return 200 status code for sucessful GET request', (done) => {
    const request = {
      method: 'GET',
      url: '/users',
    };
    Server.inject(request, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Should return 200 status code for sucessful POST request', (done) => {
    const request = {
      method: 'POST',
      url: '/users/new',
      payload: JSON.stringify({ firstName: 'John', lastName: 'Doe' }),
    };
    Server.inject(request, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Should return data of user created on sucessful POST request', (done) => {
    const request = {
      method: 'POST',
      url: '/users/new',
      payload: JSON.stringify({ firstName: 'Jane', lastName: 'Doe' }),
    };
    Server.inject(request, (response) => {
      console.log(response.data);
      expect(response.data.firstName).toMatch('Jane');
      done();
    });
  });
});
