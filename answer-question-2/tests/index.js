const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;
const app = require('../app');

describe('Todos', function () {
  describe('GET /search', function () {
    it('should return 200 | search movies ', async () => {
      const response = await request(app)
        .get('/search?filter=marvel&page=1')
        .expect('Content-Type', /json/)
        .expect(200);

      const resData = response.body.data.Search;
      expect(resData).to.be.an('array');
    });
  });
  
  describe('GET /detail', function () {
    it('should return 200 | detail movie', async () => {
      const response = await request(app)
        .get('/detail?imdbID=tt3591568')
        .expect('Content-Type', /json/)
        .expect(200);

      const resData = response.body.data;
      expect(resData).to.be.an('object');
    });
  });
});
