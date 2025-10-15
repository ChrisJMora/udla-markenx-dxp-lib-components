import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-markenx-header',
  templateUrl: './app-markenx-header.component.html',
  styles: []
})
export class AppMarkenxHeaderComponent {
  @Input()
  public title!: string;
  @Input()
  public userName!: string;
}
