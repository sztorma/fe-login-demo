// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { AuthService } from "src/app/login/service/auth/auth.service";
import { MockAuthService } from "src/app/login/service/auth/mock-auth.service";
import { ContentService } from "src/app/menu/service/content/content.service";

export const environment = {
  production: false,
  contentService: ContentService,
  authService: AuthService
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
