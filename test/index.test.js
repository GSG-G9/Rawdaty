const request = require('supertest');
const { connection, dbBuild } = require('../server/database/data');
const app = require('../server/app');
const {
  getKindergartenById,
  addCommentsQuery,
  getCommentsQuery,
  addUsersQuery,
} = require('../server/database/queries');

const token =
  'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjEzNDA1MzA0fQ.mBtUvxmAXD3w6Fx9g39z1Ip2J_nmJQC0Ef2wrHtdTYA';

beforeEach(() => dbBuild());
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

  test('Should return kindergarten full data when given id 1', async () => {
    const { rows } = await getKindergartenById(1);
    return expect(rows[0]).toEqual({
      kindergarten_name: 'روضة المتميزون الحديثة',
      cover_image:
        'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127563203_2816927261908481_825163598039189311_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=EOam1iTQLIcAX8jrnEj&_nc_ht=scontent.fgza2-1.fna&oh=e1cef81bf1cebbd72a6c1f1af651e01f&oe=604638FB',
      description:
        'نعملُ على إنشاء جيل رائع من خلال تطوير كافة مهاراتهم الفكرية والنفسية بأساليب علمية وتربوية',
      phone_number: '0599123456',
      min_price: 1000,
      max_price: 2000,
      periods: '[["07:00:00","12:00:00"]]',
      image_gallery:
        '["https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126071395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9"]',
      location_sub: 'الرمال الجنوبي',
      location_main: 'غزة',
      rating_count: '4',
      rating_average: '4',
    });
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

// Test the route 'Get'  /kindergarten
describe('Get all kindergartens', () => {
  test('Route /kindergarten status 200, json header', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/kindergarten')
      .expect(200)
      .expect('Content-Type', /json/);
    const { data } = res.body;
    expect(data).toHaveLength(9);
  });
  test('Route /kindergarten status 200, json header, data[0]= testData', async () => {
    expect.assertions(1);
    const testData = {
      id: 1,
      kindergarten_name: 'روضة المتميزون الحديثة',
      user_id: 1,
      cover_image:
        'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127563203_2816927261908481_825163598039189311_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=EOam1iTQLIcAX8jrnEj&_nc_ht=scontent.fgza2-1.fna&oh=e1cef81bf1cebbd72a6c1f1af651e01f&oe=604638FB',
      description:
        'نعملُ على إنشاء جيل رائع من خلال تطوير كافة مهاراتهم الفكرية والنفسية بأساليب علمية وتربوية',
      location_id: 1,
      phone_number: '0599123456',
      latitude: null,
      longitude: null,
      min_price: 1000,
      max_price: 2000,
      periods: '[["07:00:00","12:00:00"]]',
      location_sub: 'الرمال الجنوبي',
      location_main: 'غزة',
      image_gallery:
        '["https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126071395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9"]',
      request_status: 'approved',
      is_enable: 'true',
      rating_average: '4.2500000000000000',
      rating_count: '4',
    };
    const res = await request(app)
      .get('/api/v1/kindergarten')
      .expect(200)
      .expect('Content-Type', /json/);
    const { data } = res.body;
    expect(data[0]).toEqual(testData);
  });
});

// test the route /locations
describe('Post locations', () => {
  test('Route post /locations status 201', async () => {
    expect.assertions(1);

    const res = await request(app)
      .post('/api/v1/locations')
      .send({ mainLocation: 'غزة', subLocation: 'الشجاعية' })
      .set('Cookie', token)
      .expect(201)
      .expect('Content-Type', /json/);
    expect(res.body.data[0]).toEqual({
      id: 24,
      location_sub: 'الشجاعية',
      location_main: 'غزة',
    });
  });

  test('Should return error 400 when sub or main locations are not inserted', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/locations')
      .set('Cookie', token)
      .send({ mainLocation: 'غزة' })
      .expect(400);
    const { error } = res.body;
    expect(error).toBe('Validation Error');
  });

  test('Should return error 401 when token in wrong', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/locations')
      .set('Cookie', `${token}z`)
      .send({ mainLocation: 'غزة' })
      .expect(401);
    const { message } = res.body;
    expect(message).toBe('Unauthorized User');
  });
});

describe('Get locations', () => {
  test('Route get /locations status 200, json header', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/locations')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data).toHaveLength(23);
  });
});

// test the database query
describe('Testing post comments to kindergarten id query', () => {
  test('Should return data length 4 when given id 1', () =>
    addCommentsQuery(2, 'حنين', 'هذه روضة رائعة', 4)
      .then((result) => expect(result.rows).toHaveLength(1))
      .catch());
});
describe('Testing get comments by kindergarten id query', () => {
  test('Should return data length 4 when given id 1', () =>
    getCommentsQuery(1)
      .then((result) => expect(result.rows).toHaveLength(4))
      .catch());
});

// test the route /kindergarten/:kindergartenId/comments
describe('Test the route POST /kindergarten/:kindergartenId/comments', () => {
  test('should return status code 201 and data length 1 when given POST  /kindergarten/2/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/kindergarten/2/comments')
      .send({ userName: 'محمد', comment: 'هذه روضة مميزة', rating: 4 })
      .expect(201);
    const { data } = res.body;
    expect(data).toHaveLength(1);
  });

  test('should return status code 201 required username when given POST  /kindergarten/2/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/kindergarten/2/comments')
      .send({ userName: 'محمد', comment: 'هذه روضة مميزة', rating: 4 })
      .expect(201);
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
});
describe('Test the route /kindergarten/:kindergartenId/comments', () => {
  test('should return status code 200 and data length 2 when given GET  /kindergarten/2/comments', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/v1/kindergarten/2/comments')
      .expect(200);
    const { data } = res.body;
    expect(data).toHaveLength(2);
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

describe('delete /kindergarten/:kindergartenId', () => {
  test('should return status code 200 and message = Kindergarten deleted successfully', async () => {
    expect.assertions(1);
    const res = await request(app)
      .delete('/api/v1/kindergarten/1')
      .set('Cookie', token)
      .expect(200)
      .expect('Content-Type', /json/);
    const { message } = res.body;
    expect(message).toBe('Kindergarten deleted successfully');
  });

  test('should return status code 404 when Delete  /kindergarten/20', async () => {
    expect.assertions(1);
    const res = await request(app)
      .delete('/api/v1/kindergarten/20')
      .set('Cookie', token)
      .expect(404)
      .expect('Content-Type', /json/);
    const { message } = res.body;
    expect(message).toBe('There is no kindergarten with this id');
  });

  test('should return status code 400 and validation error  when try to delete kindergarten its id is not valid', async () => {
    expect.assertions(1);
    const res = await request(app)
      .delete('/api/v1/kindergarten/0/')
      .set('Cookie', token)
      .expect('Content-Type', /json/)
      .expect(400);
    const { error } = res.body;
    expect(error).toBe('Validation Error');
  });
});

describe('login endPoint', () => {
  test('Route /login, status 200, json header, message = logged in successfully', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/login')
      .send({ email: 'hala@hala.com', password: 'hala@hala.com' })
      .expect(200)
      .expect('Content-Type', /json/);
    const { message } = res.body;
    expect(message).toBe('logged in successfully');
  });

  test('Route /login, status 400, json header, message = email must be a valid email', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/login')
      .send({ email: 'halahala.com', password: 'hala@hala.com' })
      .expect(400)
      .expect('Content-Type', /json/);
    const { message } = res.body;
    expect(message[0]).toBe('email must be a valid email');
  });

  test('Route /login, status 400, json header, message = Password is too short - should be 8 chars minimum.', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/login')
      .send({ email: 'hala@hala.com', password: '1234' })
      .expect(400)
      .expect('Content-Type', /json/);
    const { message } = res.body;
    expect(message[0]).toBe(
      'Password is too short - should be 8 chars minimum.'
    );
  });
});

// test the add user query
describe('Testing add users query', () => {
  test('Should return data length 1', () =>
    addUsersQuery('سيف', 'sa.sa.com', '123456789', '123456789')
      .then((result) => expect(result.rows).toHaveLength(1))
      .catch());
});

// test the route /kindergarten/:kindergartenId/comments
describe('Test the route POST /signup', () => {
  test('should return status code 201 and data length 1 when given POST  /signup', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/signup')
      .send({
        userName: '1محمد',
        email: 'm@m.com',
        password: '123456789',
        confirmPassword: '123456789',
      })
      .expect(201);
    const { data } = res.body;
    expect(data).toHaveLength(1);
  });

  test('should return status code 400 and validation error message when given not valid email POST  /signup', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/signup')
      .send({
        userName: '1محمد',
        email: 'mm',
        password: '123456789',
        confirmPassword: '123456789',
      })
      .expect(400);
    const { error } = res.body;
    expect(error).toBe('Validation Error');
  });

  test('should return status code 400 and validation error message when given not matched passwords POST  /signup', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/signup')
      .send({
        userName: '1محمد',
        email: 'm@m.net',
        password: '123456789',
        confirmPassword: '1234567',
      })
      .expect(400);
    const { error } = res.body;
    expect(error).toBe('Validation Error');
  });

  test('should return status code 401 and validation error message when given an exist email POST  /signup', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/signup')
      .send({
        userName: '1محمد',
        email: 'israa@israa.com',
        password: '123456789',
        confirmPassword: '123456789',
      })
      .expect(401);
    const { message } = res.body;
    expect(message).toBe('You are registered');
  });
});
