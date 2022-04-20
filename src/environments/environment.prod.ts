import { AuthService } from "src/app/login/service/auth/auth.service";
import { MockAuthService } from "src/app/login/service/auth/mock-auth.service";
import { ContentService } from "src/app/menu/service/content/content.service";
import { UserService } from "src/app/menu/service/user/user.service";
import { RouteService } from "src/app/shared/service/route/route.service";

export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080',
  contentService: ContentService,
  authService: AuthService,
  userService: UserService,
  routeService: RouteService
};
