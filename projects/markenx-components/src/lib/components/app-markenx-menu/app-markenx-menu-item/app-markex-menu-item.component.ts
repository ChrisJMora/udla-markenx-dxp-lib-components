import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AppMarkenxMenuItem } from '../app-markenx-menu-item.interface';
import { AppMarkenxMenu } from '../app-markenx-menu.interface';

@Component({
  selector: 'app-markenx-menu-item',
  templateUrl: './app-markenx-menu-item.component.html',
  styles: [],
})
export class AppMarkenxMenuItemComponent implements AppMarkenxMenu, OnInit {
  //#region Inputs
  @Input()
  public father!: AppMarkenxMenu;
  @Input()
  public item!: AppMarkenxMenuItem;
  @Input()
  public isSelected: boolean = false;
  @Input()
  public isSubItem: boolean = false;
  //#endregion
  public enabledItems: AppMarkenxMenuItemComponent[] = [];

  public get hasSubItems(): boolean {
    return (this.item.subItems?.length ?? 0) > 0;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.father.enabledItems?.push(this);
  }

  public updateSelection(valueSelected: string): void {
    const subItemSelected = this.isSubItemSelected(valueSelected);
    this.isSelected = this.item.value === valueSelected || subItemSelected;
    if (this.isSelected && this.hasSubItems) {
      this.cdr.detectChanges();
      this.selectItem(valueSelected);
    }
  }

  public selectItem(value: string): void {
    this.enabledItems.forEach((subitem) => subitem.updateSelection(value));
  }

  private isSubItemSelected(valueSelected: string): boolean {
    if (!this.hasSubItems) return false;
    return this.item.subItems!.some(
      (subItem) => subItem.value === valueSelected
    );
  }
}
