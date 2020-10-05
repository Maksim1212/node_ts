import * as UserService from '../services/user_service';

export default async function isAdmin(id: number): Promise<boolean> {
    const user = await UserService.findByUserId(id);
    if (user.is_admin) {
        return true;
    }
    return false;
}
