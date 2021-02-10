const request = require('supertest');
const connection = require('../server/database/data/connection');
const dbBuild = require('../server/database/data/build');
const app = require('../server/app');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

describe('Get all users', () => {
  test('Route /users status 200, json header', (done) =>
    request(app)
      .get('/api/v1/users')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { data } = res.body;
        expect(data).toHaveLength(11);
        return done();
      }));
});
