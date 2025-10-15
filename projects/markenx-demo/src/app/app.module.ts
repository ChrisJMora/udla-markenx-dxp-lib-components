import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkenxComponentsModule } from 'markenx-components';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MarkenxComponentsModule,
    ButtonModule,
    TableModule,
    MenuModule,
    PanelModule,
    DividerModule,
    BreadcrumbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
