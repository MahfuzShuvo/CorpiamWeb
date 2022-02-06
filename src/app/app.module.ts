import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageHelper } from './common/message/messageHelper';
import { HeaderService } from './services/header.service';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    MessageHelper,
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
