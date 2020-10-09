const chai = require('chai');
const path = require('path');

chai.use(require('chai-fs'));

const { expect } = chai;

describe('EXIST FILES and FOLDERS', () => {
    it('CodeStyle', (done) => {
        expect(path.join(__dirname, '../../.eslintrc')).to.be.a.path();

        done();
    });
    it('Editorconfig', (done) => {
        expect(path.join(__dirname, '../../.editorconfig')).to.be.a.path();

        done();
    });
    it('ENV', (done) => {
        expect(path.join(__dirname, '../../.env')).to.be.a.path();

        done();
    });
    it('Gitignore', (done) => {
        expect(path.join(__dirname, '../../.gitignore')).to.be.a.path();

        done();
    });
    it('Nodemon', (done) => {
        expect(path.join(__dirname, '../../nodemon.json')).to.be.a.path();

        done();
    });
    it('Package json', (done) => {
        expect(path.join(__dirname, '../../package.json')).to.be.a.path();

        done();
    });
    it('Readme', (done) => {
        expect(path.join(__dirname, '../../README.md')).to.be.a.path();

        done();
    });
    it('Dockerfiles', (done) => {
        expect(path.join(__dirname, '../../docker-compose.yml')).to.be.a.path();
        expect(path.join(__dirname, '../../.dockerignore')).to.be.a.path();
        expect(path.join(__dirname, '../../Dockerfile')).to.be.a.path();

        done();
    });
    it('config', (done) => {
        expect(path.join(__dirname, '../../build/config')).to.be.a.path();

        done();
    });
    it('controllers', (done) => {
        expect(path.join(__dirname, '../../build/controllers')).to.be.a.path();

        done();
    });
    it('entities', (done) => {
        expect(path.join(__dirname, '../../build/entities')).to.be.a.path();

        done();
    });
    it('error', (done) => {
        expect(path.join(__dirname, '../../build/error')).to.be.a.path();

        done();
    });
    it('helpers', (done) => {
        expect(path.join(__dirname, '../../build/helpers')).to.be.a.path();

        done();
    });
    it('interfaces', (done) => {
        expect(path.join(__dirname, '../../build/interfaces')).to.be.a.path();

        done();
    });
    it('middleware', (done) => {
        expect(path.join(__dirname, '../../build/middleware')).to.be.a.path();

        done();
    });
    it('migration', (done) => {
        expect(path.join(__dirname, '../../build/migration')).to.be.a.path();

        done();
    });
    it('routes', (done) => {
        expect(path.join(__dirname, '../../build/routes')).to.be.a.path();

        done();
    });
    it('services', (done) => {
        expect(path.join(__dirname, '../../build/services')).to.be.a.path();

        done();
    });
    it('validations', (done) => {
        expect(path.join(__dirname, '../../build/validations')).to.be.a.path();

        done();
    });
});
