import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AdminNavigationComponent } from './admin/admin-navigation/admin-navigation.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminDbComponent } from './admin/admin-db/admin-db.component';
import { UserListComponent } from './admin/admin-user/user-list/user-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavigationComponent,
    AdminUserComponent,
    AdminDbComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
