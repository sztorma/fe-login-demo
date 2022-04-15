import { User } from "./user.model";

export class Authentication {
    jwtToken!: string;
    authenticatedUser!: User;
}