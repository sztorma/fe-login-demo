import { User } from "./user.model";

export class Authentication {
    jwt!: string;
    authenticatedUser!: User;
}