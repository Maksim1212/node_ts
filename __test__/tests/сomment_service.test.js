const chai = require('chai');

const CommentService = require('../../build/services/comment_service');

const { expect } = chai;
const id = 2;

const commentData = {
    post_id: 2,
    body: "Chai",
    user_id: '1',
}

updateComment = {
    likes: [ '23' ],
};

let deletedCommentId = '';

describe('CommentComponent -> service', () => {

    it('CommentComponent -> service -> positive -> createComment', (done) => {
        CommentService.create(commentData)
            .then((res) => {
                const expectBody = expect(res);
                expectBody.to.be.an('Object');
                done();
            })
            .catch(done);
    });

    it('CommentComponent -> service -> positive -> findByPostId', (done) => {
        CommentService.findByPostId(commentData.post_id)
            .then((res) => {
                const expectBody = expect(res);
                deletedCommentId = res.id;
                expectBody.to.be.an('object');
                done();
            })
            .catch(done);
    });


    it('CommentComponent -> service -> positive -> findAll', (done) => {
        CommentService.findAll()
            .then((res) => {
                const expectBody = expect(res);
                expectBody.to.be.an('array');
                done();
            })
            .catch(done);
    });

    it('CommentComponent -> service -> positive -> findOne', (done) => {
        CommentService.findOne(deletedCommentId)
            .then((res) => {
                const expectBody = expect(res);
                expectBody.to.be.an('object');
                done();
            })
            .catch(done);
    });

    it('CommentComponent -> service -> positive -> updateComment', (done) => {
        CommentService.updateComment(deletedCommentId, updateComment)
            .then((res) => {
                const expectBody = expect(res);
                expectBody.to.be.an('Object');
                done();
            })
            .catch(done);
    });

    it('CommentComponent -> service -> positive -> Delete', (done) => {
        console.log('deleteCommentId',deletedCommentId);
        CommentService.deleteById(deletedCommentId)
            .then((res) => {
                const expectBody = expect(res);
                expectBody.to.be.an('Object');
                done();
            })
            .catch(done);
    });
});
