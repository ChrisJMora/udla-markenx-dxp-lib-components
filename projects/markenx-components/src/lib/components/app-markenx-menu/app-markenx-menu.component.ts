import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { AppMarkenxMenuItem } from './app-markenx-menu-item.interface';
import { AppMarkenxMenu } from './app-markenx-menu.interface';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AppMarkenxMenuItemComponent } from './app-markenx-menu-item/app-markex-menu-item.component';

@Component({
  selector: 'app-markenx-menu',
  templateUrl: './app-markenx-menu.component.html',
  styles: [],
})
export class AppMarkenxMenuComponent implements AppMarkenxMenu, AfterViewInit {
  @Input()
  public rootItems: Array<AppMarkenxMenuItem> = [];

  @Output()
  public itemSelected: EventEmitter<string> = new EventEmitter<string>();

  public selectedValue!: string;
  public enabledItems: Array<{ updateSelection(value: string): void }> = [];

  constructor(private router: Router) {}

  public ngAfterViewInit() {
    this.updateSelectionFromRoute(this.router.url);

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event) => {
        this.updateSelectionFromRoute(event.urlAfterRedirects);
      });
  }

  private updateSelectionFromRoute(currentUrl: string) {
    const found = this.findMatchingItem(currentUrl, this.rootItems);

    if (found) {
      this.selectItem(found.value);
    }
  }

  private findMatchingItem(
    url: string,
    items: AppMarkenxMenuItem[]
  ): AppMarkenxMenuItem | undefined {
    let matchedItem: AppMarkenxMenuItem | undefined;

    for (const item of items) {
      if (url === item.route || url.startsWith(item.route + '/')) {
        matchedItem = item;
      }

      if (item.subItems?.length) {
        const found = this.findMatchingItem(url, item.subItems);
        if (found) {
          return found;
        }
      }
    }

    return matchedItem;
  }

  public selectItem(value: string) {
    this.selectedValue = value;
    this.enabledItems.forEach((item) =>
      item.updateSelection(this.selectedValue)
    );
    this.itemSelected.emit(this.selectedValue);
  }
}
