import { Component, Input } from '@angular/core';
import { AppMarkenxMenuItem } from '../app-markenx-menu/app-markenx-menu-item.interface';

@Component({
  selector: 'app-markenx-layout',
  templateUrl: './app-markenx-layout.component.html',
  styleUrls: ['./app-markenx-layout.component.scss'],
})
export class AppMarkenxLayoutComponent {
  @Input()
  public headerTitle!: string;
  @Input()
  public userName!: string;
  @Input()
  public menuItems: Array<AppMarkenxMenuItem> = [];
}
