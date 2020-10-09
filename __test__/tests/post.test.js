const request = require('supertest');
const chai = require('chai');

const server = require('../../build/server/server');

const { expect } = chai;

describe('post_controller -> controllers', () => {
    describe('controllers -> /posts/', () => {
        it('findAll', (done) => {
            request(server)
                .get('/posts/')
                .set('Accept', 'application/json')
                //.redirects(1)
                .expect(200, done())
        });
    });
});
