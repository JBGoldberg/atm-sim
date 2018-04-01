import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AtmService } from './atm.service';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DispenserComponent } from './dispenser/dispenser.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    DispenserComponent,
    ErrorComponent
  ],
  entryComponents: [
    ErrorComponent,
    DispenserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [AtmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
