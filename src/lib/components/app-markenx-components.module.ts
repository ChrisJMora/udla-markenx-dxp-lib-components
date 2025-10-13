import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AppMarkenxHeaderComponent } from './app-markenx-header/app-markenx-header.component';
import { AppMarkenxMenuComponent } from './app-markenx-menu/app-markenx-menu.component';
import { AppMarkenxMenuItemComponent } from './app-markenx-menu/app-markenx-menu-item/app-markex-menu-item.component';
import { AppMarkenxBreadcrumbComponent } from './app-markenx-breadcrumb/app-markenx-breadcrumb.component';

@NgModule({
  declarations: [
    AppMarkenxHeaderComponent,
    AppMarkenxMenuComponent,
    AppMarkenxMenuItemComponent,
    AppMarkenxBreadcrumbComponent,
  ],
  exports: [
    AppMarkenxHeaderComponent,
    AppMarkenxMenuComponent,
    AppMarkenxMenuItemComponent,
    AppMarkenxBreadcrumbComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, BreadcrumbModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MarkenxComponentsModule {}
