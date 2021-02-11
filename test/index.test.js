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

// test the route /search?q=&minPrice=&maxPrice=&locationId=
describe('search endPoint', () => {
  test('Route /search, status 400, json header, message = At least one of these (q, minPrice & maxPrice,locationId) values is required', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/search')
      .expect(400)
      .expect('Content-Type', /json/);
    const { message } = res.body;
    expect(message).toBe(
      'At least one of these (q, minPrice & maxPrice,locationId) values is required'
    );
  });

  test('Route /search?something=hi, status 400, json header, message = At least one of these (q, minPrice & maxPrice, locationId) values is required', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/search?something=hi')
      .expect(400)
      .expect('Content-Type', /json/);
    const { message } = res.body;
    expect(message).toBe(
      'At least one of these (q, minPrice & maxPrice,locationId) values is required'
    );
  });

  test('Route /search?minPrice=hi, status 400, json header, message = minPrice must be a `number` type', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/search?minPrice=hi')
      .expect(400)
      .expect('Content-Type', /json/);
    const { message } = res.body;
    expect(message[0].split(',')[0]).toBe('minPrice must be a `number` type');
  });

  test('Route /search?maxPrice=hi, status 400, json header, message = minPrice must be a `number` type', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/search?maxPrice=hi')
      .expect(400)
      .expect('Content-Type', /json/);
    const { message } = res.body;
    expect(message[0].split(',')[0]).toBe('maxPrice must be a `number` type');
  });

  test('Route /search?locationId=-10, status 400, json header, message = minPrice must be a positive number', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/search?locationId=-10')
      .expect(400)
      .expect('Content-Type', /json/);
    const { message } = res.body;
    expect(message[0]).toBe('locationId must be a positive number');
  });

  test('Route /search?maxPrice=800, status 400, json header, message = At least one of these (q, minPrice & maxPrice,locationId) values is required', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/search?maxPrice=800')
      .expect(400)
      .expect('Content-Type', /json/);
    const { message } = res.body;
    expect(message).toBe(
      'At least one of these (q, minPrice & maxPrice,locationId) values is required'
    );
  });

  test('Route /search?minPrice=500&maxPrice=1000, status 200, json header, data = testData', async () => {
    const testData = {
      id: 3,
      kindergarten_name: 'روضة يا هلا النموذجية الخاصة',
      cover_image:
        'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/145371533_4926517364056683_4419031173382697234_o.jpg?_nc_cat=101&ccb=2&_nc_sid=e3f864&_nc_ohc=p8yB9sYxtWYAX9PP0Ap&_nc_ht=scontent.fgza2-1.fna&oh=ddc08b927f6773710ca251668d628d73&oe=6048B032',
      min_price: 300,
      max_price: 500,
      location_sub: 'النصر',
      location_main: 'غزة',
      rating_count: '1',
      rating_average: '4.0000000000000000',
    };

    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/search?minPrice=500&maxPrice=1000')
      .expect(200)
      .expect('Content-Type', /json/);
    const { data } = res.body;
    expect(data[0]).toEqual(testData);
  });
});
