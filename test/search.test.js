const request = require('supertest');
const { connection, dbBuild } = require('../server/database/data');

const app = require('../server/app');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

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
