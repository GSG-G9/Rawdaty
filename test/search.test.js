const request = require('supertest');
const { connection, dbBuild } = require('../server/database/data');

const app = require('../server/app');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

// test the route /search?q=&minPrice=&maxPrice=&locationId=
describe('search endPoint', () => {
  test('Route /search, status 400, json header, message = At least one of these (q, minPrice & maxPrice,locationId) values is required', (done) =>
    request(app)
      .get('/api/v1/search')
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe(
          'At least one of these (q, minPrice & maxPrice,locationId) values is required'
        );
        return done();
      }));

  test('Route /search?something=hi, status 400, json header, message = At least one of these (q, minPrice & maxPrice, locationId) values is required', (done) =>
    request(app)
      .get('/api/v1/search?something=hi')
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe(
          'At least one of these (q, minPrice & maxPrice,locationId) values is required'
        );
        return done();
      }));

  test('Route /search?minPrice=hi, status 400, json header, message = minPrice must be a `number` type', (done) =>
    request(app)
      .get('/api/v1/search?minPrice=hi')
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message[0].split(',')[0]).toBe(
          'minPrice must be a `number` type'
        );
        return done();
      }));

  test('Route /search?maxPrice=hi, status 400, json header, message = minPrice must be a `number` type', (done) =>
    request(app)
      .get('/api/v1/search?maxPrice=hi')
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message[0].split(',')[0]).toBe(
          'maxPrice must be a `number` type'
        );
        return done();
      }));

  test('Route /search?locationId=-10, status 400, json header, message = minPrice must be a positive number', (done) =>
    request(app)
      .get('/api/v1/search?locationId=-10')
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message[0]).toBe('locationId must be a positive number');
        return done();
      }));

  test('Route /search?maxPrice=800, status 400, json header, message = At least one of these (q, minPrice & maxPrice,locationId) values is required', (done) =>
    request(app)
      .get('/api/v1/search?maxPrice=800')
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        expect(message).toBe(
          'At least one of these (q, minPrice & maxPrice,locationId) values is required'
        );
        return done();
      }));

  test('Route /search?minPrice=500&maxPrice=1000, status 200, json header, data = testData', (done) => {
    const testData = {
      id: 6,
      kindergarten_name: 'روضة الزهراء النموذجية الخاصة',
      cover_image:
        'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/551059_604585486228232_1415987366_n.jpg?_nc_cat=111&ccb=2&_nc_sid=e3f864&_nc_ohc=kEd6i519NhYAX8iivcY&_nc_ht=scontent.fgza2-1.fna&oh=aa8c6154da2c42b82c50adb9cfa5f5e6&oe=6045F3E5',
      phone_number: '0599123456',
      min_price: 500,
      max_price: 1000,
      location_sub: 'الشجاعية',
      rating_count: '1',
      rating_average: '5.00',
    };

    return request(app)
      .get('/api/v1/search?minPrice=500&maxPrice=1000')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        const { data } = res.body;
        expect(data[0]).toEqual(testData);
        return done();
      });
  });
});
