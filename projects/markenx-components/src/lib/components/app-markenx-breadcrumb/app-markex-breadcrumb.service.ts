import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  public items: MenuItem[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.items = this.buildBreadcrumb(this.route.root);
      });
  }

  private buildBreadcrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: MenuItem[] = []
  ): MenuItem[] {
    const routeConfig = route.routeConfig;
    const label =
      routeConfig && routeConfig.data ? routeConfig.data['breadcrumb'] : '';
    const path = routeConfig && routeConfig.path ? routeConfig.path : '';

    const nextUrl = `${url}/${path}`;
    const breadcrumb: MenuItem = { label, routerLink: [nextUrl] };

    const newBreadcrumbs = label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];

    if (route.firstChild) {
      return this.buildBreadcrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
