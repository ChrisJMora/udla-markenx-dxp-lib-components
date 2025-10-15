import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DividerModule } from 'primeng/divider';
import { AppMarkenxHeaderComponent } from './app-markenx-header/app-markenx-header.component';
import { AppMarkenxMenuComponent } from './app-markenx-menu/app-markenx-menu.component';
import { AppMarkenxMenuItemComponent } from './app-markenx-menu/app-markenx-menu-item/app-markex-menu-item.component';
import { AppMarkenxBreadcrumbComponent } from './app-markenx-breadcrumb/app-markenx-breadcrumb.component';
import { AppMarkenxLayoutComponent } from './app-markenx-layout/app-markenx-layout.component';

@NgModule({
  declarations: [
    AppMarkenxHeaderComponent,
    AppMarkenxMenuComponent,
    AppMarkenxMenuItemComponent,
    AppMarkenxBreadcrumbComponent,
    AppMarkenxLayoutComponent,
  ],
  exports: [
    AppMarkenxHeaderComponent,
    AppMarkenxMenuComponent,
    AppMarkenxMenuItemComponent,
    AppMarkenxBreadcrumbComponent,
    AppMarkenxLayoutComponent,
  ],
  imports: [CommonModule, BrowserAnimationsModule, BreadcrumbModule, DividerModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MarkenxComponentsModule {}
