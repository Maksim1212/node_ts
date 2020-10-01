import * as faker from 'faker';

const commentSeed = [
    {
        id: faker.random.number(),
        author_id: faker.random.number(),
        body: faker.lorem.text(),
        likes: [faker.random.number()],
        post_id: faker.random.number(),
    },
    {
        id: faker.random.number(),
        author_id: faker.random.number(),
        body: faker.lorem.text(),
        likes: [faker.random.number(), faker.random.number(), faker.random.number()],
        post_id: faker.random.number(),
    },
    {
        id: faker.random.number(),
        author_id: faker.random.number(),
        body: faker.lorem.text(),
        likes: [
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
        ],
        post_id: faker.random.number(),
    },
    {
        id: faker.random.number(),
        author_id: faker.random.number(),
        body: faker.lorem.text(),
        likes: [],
        post_id: faker.random.number(),
    },
    {
        id: faker.random.number(),
        author_id: faker.random.number(),
        body: faker.lorem.text(),
        likes: [faker.random.number()],
        post_id: faker.random.number(),
    },
];

export default commentSeed;
