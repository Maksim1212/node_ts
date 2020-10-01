import * as faker from 'faker';

const userSeed = [
    {
        id: faker.random.number(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        refreshToken: faker.finance.routingNumber(),
        is_admin: faker.random.boolean,
    },
    {
        id: faker.random.number(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        refreshToken: faker.finance.routingNumber(),
        is_admin: faker.random.boolean,
    },
    {
        id: faker.random.number(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        refreshToken: faker.finance.routingNumber(),
        is_admin: faker.random.boolean,
    },
    {
        id: faker.random.number(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        refreshToken: faker.finance.routingNumber(),
        is_admin: faker.random.boolean,
    },
    {
        id: faker.random.number(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        refreshToken: faker.finance.routingNumber(),
        is_admin: faker.random.boolean,
    },
];

export default userSeed;
