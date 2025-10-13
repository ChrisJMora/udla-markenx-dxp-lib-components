import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMarkenxHeaderComponent } from 'src/lib/components/app-markenx-header/app-markenx-header.component';
import { AppMarkenxMenuComponent } from 'src/lib/components/app-markenx-menu/app-markenx-menu.component';
import { AppMarkenxMenuItemComponent } from 'src/lib/components/app-markenx-menu/app-markenx-menu-item/app-markex-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMarkenxHeaderComponent,
    AppMarkenxMenuComponent,
    AppMarkenxMenuItemComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
