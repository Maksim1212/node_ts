import { User } from '../components/interfaces';

export default function getUserMainFields(user: User): User {
    const { name, id } = user;
    return {
        id,
        name,
    };
}
