import { AppMarkenxMenuItemComponent } from "./app-markenx-menu-item/app-markex-menu-item.component";

export interface AppMarkenxMenu {
  enabledItems: Array<AppMarkenxMenuItemComponent>;
  selectItem(value: string): void;
}
