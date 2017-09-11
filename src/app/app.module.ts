import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user.component';
import { AdminComponent } from './component/admin.component';
import { ErrorComponent } from './component/notFound.component';
import { routing } from './app.routing';

import { KeysPipe } from './keys.pipe'; 


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    ErrorComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
