import {ApplicationRef, ChangeDetectorRef, Component, inject, NgZone} from '@angular/core';
import {Level1Component} from './components/level1/level1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly appRef = inject(ApplicationRef);

  triggerCD() {
    this.appRef.tick();
  }
}
