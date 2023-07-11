import {Component, ElementRef, inject, NgZone} from '@angular/core';
import {Level3Component} from '../level3/level3.component';
import {hightlight} from '../utils/highlight';

@Component({
  selector: 'app-level2',
  standalone: true,
  imports: [Level3Component],
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component {
  private readonly zone = inject(NgZone);
  private readonly hostEl = inject(ElementRef);

  cdCheck() {
    console.log('check --')
    this.zone.runOutsideAngular(() => hightlight(this.hostEl))
    // hightlight(this.hostEl)
  }
}
