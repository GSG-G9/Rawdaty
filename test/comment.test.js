const request = require('supertest');
const { connection, dbBuild } = require('../server/database/data');
const app = require('../server/app');
const { getCommentsQuery } = require('../server/database/queries');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

// test the database query
describe('Testing get comments by kindergarten id query', () => {
  test('Should return data length 4 when given id 1', () =>
    getCommentsQuery(1)
      .then((result) => expect(result.rows).toHaveLength(4))
      .catch());
});

// // test the route /kindergarten/:kindergartenId/comments
// describe('Test the route /kindergarten/:kindergartenId/comments', () => {
//   test('should return status code 200 and data length 2 when given GET  /kindergarten/2', (done) =>
//     request(app)
//       .get('/api/v1/kindergarten/2/comments')
//       .expect(200)
//       .expect('Content-Type', /json/)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res.body.data).toHaveLength(1);
//         return done();
//       }));

//   test('should return status code 400 given GET  /kindergarten/text', (done) =>
//     request(app)
//       .get('/api/v1/kindergarten/text')
//       .expect(400)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res.body.error).toBe('Validation Error');
//         return done();
//       }));

//   test('should return status code 400 given GET  /kindergarten/-1', (done) =>
//     request(app)
//       .get('/api/v1/kindergarten/-1')
//       .expect(400)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res.body.error).toBe('Validation Error');
//         return done();
//       }));

//   test('should return status code 400 given GET  /kindergarten/0', (done) =>
//     request(app)
//       .get('/api/v1/kindergarten/0')
//       .expect(400)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res.body.error).toBe('Validation Error');
//         return done();
//       }));

//   test('should return status code 404 given GET  /kindergarten/17', (done) =>
//     request(app)
//       .get('/api/v1/kindergarten/17')
//       .expect(404)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res.body.error).toBe('Page Not Found');
//         return done();
//       }));
// });
