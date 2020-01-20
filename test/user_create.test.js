const request = require('supertest')

const app = require('../server')
describe('PUser_create', () => {
  it('should create a user', async () => {
    const res = await request(app)
      //.post('/users')
    .get('/users')
      .send({
        name: 'test',
        token: 'test1',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})