import { AuthService } from "src/app/login/service/auth/auth.service";
import { MockAuthService } from "src/app/login/service/auth/mock-auth.service";
import { ContentService } from "src/app/menu/service/content/content.service";

export const environment = {
  production: true,
  contentService: ContentService,
  authService: AuthService
};
