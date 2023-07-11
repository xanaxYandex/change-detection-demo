import {Component, ElementRef, inject, NgZone} from '@angular/core';
import {hightlight} from '../utils/highlight';

@Component({
  selector: 'app-level3',
  standalone: true,
  imports: [],
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss']
})
export class Level3Component {
  private readonly zone = inject(NgZone);
  private readonly hostEl = inject(ElementRef);

  cdCheck() {
    console.log('check ---')
    this.zone.runOutsideAngular(() => hightlight(this.hostEl))
    // hightlight(this.hostEl)
  }
}
