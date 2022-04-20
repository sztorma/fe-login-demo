import { MockAuthService } from "src/app/login/service/auth/mock-auth.service";
import { MockContentService } from "src/app/menu/service/content/mock-content.service";
import { MockUserService } from "src/app/menu/service/user/mock-user.service";
import { UserService } from "src/app/menu/service/user/user.service";

export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
    contentService: MockContentService,
    authService: MockAuthService,
    userService: MockUserService
};
