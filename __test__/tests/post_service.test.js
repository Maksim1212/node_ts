const chai = require('chai');

const PostService = require('../../build/services/post_service');


const { expect } = chai;
const id = 2;
const postData = {
    title: 'Chai',
    body: "Chai",
    user_id: '011',
    author_name: 'Chai',
    accessToken: 'accessTokenaccessTokenaccessTokenaccessToken',
}

const updatePost = {
    title: 'test',
    body: 'test',
}

let deletedPostId = '';

describe('PostComponent -> service', () => {

    it('PostComponent -> service -> positive -> createPost', (done) => {
        PostService.cretePost(postData)
            .then((res) => {
                const expectBody = expect(res);
                expectBody.to.be.an('Object');
                done();
            })
            .catch(done);
    });

    it('PostComponent -> service -> positive -> findAll', (done) => {
        PostService.findAll()
            .then((res) => {
                const expectBody = expect(res);
                expectBody.to.be.an('array');
                done();
            })
            .catch(done);
    });

    it('PostComponent -> service -> positive -> sortByDate', (done) => {
        PostService.sortByDate('ASC')
            .then((res) => {
                const expectBody = expect(res);
                expectBody.to.be.an('array');
                done();
            })
            .catch(done);
    });

    it('PostComponent -> service -> positive -> sortByLikes', (done) => {
        PostService.sortByLikes('ASC')
            .then((res) => {
                const expectBody = expect(res);
                expectBody.to.be.an('array');
                done();
            })
            .catch(done);
    });

    it('PostComponent -> service -> positive -> findByPostId', (done) => {
        PostService.findByPostId(id)
            .then((res) => {
                const expectBody = expect(res);
                expectBody.to.be.an('object');
                done();
            })
            .catch(done);
    });

    it('PostComponent -> service -> positive -> findByUserId', (done) => {
        PostService.findByUserId(postData.user_id)
            .then((res) => {
                const expectBody = expect(res);
                deletedPostId = res[0].id;
                expectBody.to.be.an('Array');
                done();
            })
            .catch(done);
    });

    it('PostComponent -> service -> positive -> findOrfail', (done) => {
        PostService.findOrfail(deletedPostId)
            .then((res) => {
                const expectBody = expect(res);
                expectBody.to.be.an('Object');
                done();
            })
            .catch(done);
    });


    it('PostComponent -> service -> positive -> updatePostById', (done) => {
        PostService.updatePostById(deletedPostId, updatePost)
            .then((res) => {
                const expectBody = expect(res);
                expectBody.to.be.an('Object');
                done();
            })
            .catch(done);
    });

    it('PostComponent -> service -> positive -> Delete', (done) => {
        PostService.deletePost(deletedPostId)
            .then((res) => {
                const expectBody = expect(res);
                expectBody.to.be.an('Object');
                done();
            })
            .catch(done);
    });
});
