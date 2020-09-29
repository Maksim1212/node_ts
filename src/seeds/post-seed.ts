import * as faker from 'faker';

const postSeed = [
    {
        id: faker.random.number(),
        title: faker.name.title(),
        author_id: faker.random.number(),
        author_name: faker.name.firstName(),
        body: faker.lorem.text(),
        likes: [faker.random.number(), faker.random.number(), faker.random.number()],
    },
    {
        id: faker.random.number(),
        title: faker.name.title(),
        author_id: faker.random.number(),
        author_name: faker.name.firstName(),
        body: faker.lorem.text(),
        likes: [faker.random.number()],
    },
    {
        id: faker.random.number(),
        title: faker.name.title(),
        author_id: faker.random.number(),
        author_name: faker.name.firstName(),
        body: faker.lorem.text(),
        likes: [faker.random.number(), faker.random.number()],
    },
    {
        id: faker.random.number(),
        title: faker.name.title(),
        author_id: faker.random.number(),
        author_name: faker.name.firstName(),
        body: faker.lorem.text(),
        likes: [
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
        ],
    },
    {
        id: faker.random.number(),
        title: faker.name.title(),
        author_id: faker.random.number(),
        author_name: faker.name.firstName(),
        body: faker.lorem.text(),
        likes: [],
    },
];

export default postSeed;
