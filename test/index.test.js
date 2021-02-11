const request = require('supertest');
const { connection, dbBuild } = require('../server/database/data');
const app = require('../server/app');
const { getKindergartenById } = require('../server/database/queries');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

describe('Get all users', () => {
  test('Route /users status 200, json header', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/users')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data).toHaveLength(11);
  });
});

// test the database query
describe('Testing get kindergarten by id query', () => {
  test('Should return data length 1 when given id 1', async () => {
    const { rows } = await getKindergartenById(1);
    return expect(rows).toHaveLength(1);
  });

  test('Should return kindergarten name is روضة البسمة الجميلة when given id 2', async () => {
    const { rows } = await getKindergartenById(2);
    return expect(rows[0].kindergarten_name).toBe('روضة البسمة الجميلة');
  });
});

// test the route /kindergarten/:kindergartenId
describe('Test the route /kindergarten/:kindergartenId', () => {
  test('should return status code 200 and data length 1 when given GET  /kindergarten/1', async () => {
    expect.assertions(1);
    const res = await request(app).get('/api/v1/kindergarten/1').expect(200);
    expect(res.body.data.length).toBe(1);
  });

  test('should return status code 400 given GET  /kindergarten/text', async () => {
    expect.assertions(1);
    const res = await request(app).get('/api/v1/kindergarten/text').expect(400);
    expect(res.body.error).toBe('Validation Error');
  });

  test('should return status code 400 given GET  /kindergarten/-1', async () => {
    expect.assertions(1);
    const res = await request(app).get('/api/v1/kindergarten/-1').expect(400);
    expect(res.body.error).toBe('Validation Error');
  });

  test('should return status code 400 given GET  /kindergarten/0', async () => {
    expect.assertions(1);
    const res = await request(app).get('/api/v1/kindergarten/0').expect(400);
    expect(res.body.error).toBe('Validation Error');
  });

  test('should return status code 404 given GET  /kindergarten/17', async () => {
    expect.assertions(1);
    const res = await request(app).get('/api/v1/kindergarten/17').expect(404);
    expect(res.body.error).toBe('Page Not Found');
  });
});

// test the route /locations
describe('Get locations', () => {
  test('Route /users status 200, json header', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/locations')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data).toHaveLength(23);
  });
});
