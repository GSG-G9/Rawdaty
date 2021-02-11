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

// test the route /kindergarten/:kindergartenId/comments
describe('Test the route /kindergarten/:kindergartenId/comments', () => {
  test('should return status code 200 and data length 2 when given GET  /kindergarten/2/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/kindergarten/2/comments')
      .expect(200);
    const { data } = res.body;
    expect(data.length).toBe(2);
  });

  test('should return status code 200 and expected data when given GET  /kindergarten/1/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/kindergarten/1/comments')
      .expect(200);
    const { data } = res.body;
    expect(data[0].comment).toBe(
      'هذه روضة رائعة وأتمنى لها دوام التميز والنجاح'
    );
  });

  test('should return status code 400 given GET  /kindergarten/text/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/kindergarten/text/comments')
      .expect(400);
    const { error } = res.body;
    expect(error).toBe('Validation Error');
  });

  test('should return status code 400 given GET  /kindergarten/-1/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/kindergarten/-1/comments')
      .expect(400);
    const { error } = res.body;
    expect(error).toBe('Validation Error');
  });

  test('should return status code 400 given GET  /kindergarten/0/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/kindergarten/0/comments')
      .expect(400);
    const { error } = res.body;
    expect(error).toBe('Validation Error');
  });

  test('should return status code 404 given GET  /kindergarten/17/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/kindergarten/17/comments')
      .expect(404);
    const { message } = res.body;
    expect(message).toBe('There is no comments for this id');
  });
});
