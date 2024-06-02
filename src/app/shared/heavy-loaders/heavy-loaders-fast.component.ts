import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full', cssClass()]">
      <ng-content />
    </section>
  `,
  
})
export class HeavyLoadersFastComponent {
  public cssClass = input.required<string>();
}
