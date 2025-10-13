import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkenxComponentsModule } from 'src/lib/components/app-markenx-components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MarkenxComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
