import { MockAuthService } from "src/app/login/service/auth/mock-auth.service";
import { MockContentService } from "src/app/menu/service/content/mock-content.service";

export const environment = {
    production: false,
    contentService: MockContentService,
    authService: MockAuthService
};
