import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AtmService } from './atm.service';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DispenserComponent } from './dispenser/dispenser.component';


@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    DispenserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AtmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
