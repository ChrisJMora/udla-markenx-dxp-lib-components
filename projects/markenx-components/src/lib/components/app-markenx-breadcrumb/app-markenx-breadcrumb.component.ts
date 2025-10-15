import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from './app-markex-breadcrumb.service';

@Component({
  selector: 'app-markenx-breadcrumb',
  templateUrl: './app-markenx-breadcrumb.component.html',
  styles: [],
})
export class AppMarkenxBreadcrumbComponent implements OnInit {
  public home!: MenuItem;

  constructor(public breadcrumbService: BreadcrumbService) {}

  public ngOnInit(): void {
    this.home = { icon: 'pi pi-home' };
  }
}
