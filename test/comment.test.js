const request = require('supertest');
const { connection, dbBuild } = require('../server/database/data');
const app = require('../server/app');
const { addCommentsQuery } = require('../server/database/queries');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

// test the database query
describe('Testing post comments to kindergarten id query', () => {
  test('Should return data length 4 when given id 1', () =>
    addCommentsQuery(2, 'حنين', 'هذه روضة رائعة', 4)
      .then((result) => expect(result.rows).toHaveLength(1))
      .catch());
});

// test the route /kindergarten/:kindergartenId/comments
describe('Test the route POST /kindergarten/:kindergartenId/comments', () => {
  test('should return status code 200 and data length 1 when given POST  /kindergarten/2/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/kindergarten/2/comments')
      .send({ userName: 'محمد', comment: 'هذه روضة مميزة', rating: 4 })
      .expect(200);
    const { data } = res.body;
    expect(data).toHaveLength(1);
  });

  test('should return status code 200 required username when given POST  /kindergarten/2/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/kindergarten/2/comments')
      .send({ userName: 'محمد', comment: 'هذه روضة مميزة', rating: 4 })
      .expect(200);
    const { data } = res.body;
    expect(data[0].user_name).toBe('محمد');
  });

  test('should return status code 400 and validation error message when given rating not number POST  /kindergarten/2/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/kindergarten/2/comments')
      .send({ userName: 'محمد', comment: 'هذه روضة مميزة', rating: 'good' })
      .expect(400);
    const { error } = res.body;
    expect(error).toBe('Validation Error');
  });

  test('should return status code 400 and Bad Request error  when given kindergarten id not exist in database POST  /kindergarten/2/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/kindergarten/19/comments')
      .send({ userName: 'محمد', comment: 'هذه روضة مميزة', rating: 4 })
      .expect(400);
    const { error } = res.body;
    expect(error).toBe('Bad Request');
  });

  test('should return status code 400 and validation error  when given kindergarten id not valid POST  /kindergarten/2/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/kindergarten/0/comments')
      .send({ userName: 'محمد', comment: 'هذه روضة مميزة', rating: 4 })
      .expect(400);
    const { error } = res.body;
    expect(error).toBe('Validation Error');
  });
});
