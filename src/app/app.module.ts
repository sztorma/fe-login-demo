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
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'IContentService',
      useClass: environment.contentService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
