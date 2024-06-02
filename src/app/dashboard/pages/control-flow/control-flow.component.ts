import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frontFrameworks = signal<string[]>([
    'Angular',
    'Vue',
    'Svelte',
    'Qwik',
    'NextJS',
  ]);
  public frontFrameworks2 = signal<string[]>([]);

  public toggleContent() {
    this.showContent.update((value) => !value);

    const rndInt = this.randomIntFromInterval(50, 100);
    if (rndInt >= 90) {
      this.grade.set('A');
    } else if (rndInt >= 80 && rndInt < 90) {
      this.grade.set('B');
    } else {
      this.grade.set('F');
    }

    this.frontFrameworks2.update((values) => {
      return [...values, 'Angular'];
    });
  }

  private randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
