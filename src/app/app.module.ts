import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './shared/components/content/content.component';
import { AdminContentComponent } from './menu/admin-content/admin-content.component';
import { ModeratorContentComponent } from './menu/moderator-content/moderator-content.component';
import { UserContentComponent } from './menu/user-content/user-content.component';
import { MenuComponent } from './menu/menu.component';
import { environment } from 'src/environments/environment';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/interceptor/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    AdminContentComponent,
    ModeratorContentComponent,
    UserContentComponent,
    MenuComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'IContentService',
      useClass: environment.contentService
    },
    {
      provide: 'IAuthService',
      useClass: environment.authService
    },
    {
      provide: 'IUserService',
      useClass: environment.userService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
