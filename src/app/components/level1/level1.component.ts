import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, NgZone, OnInit} from '@angular/core';
import {Level2Component} from '../level2/level2.component';
import {hightlight} from '../utils/highlight';
import {Level2CloneComponent} from '../level2-clone/level2-clone.component';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-level1',
  standalone: true,
  imports: [Level2Component, Level2CloneComponent],
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Level1Component {
  private readonly zone = inject(NgZone);
  private readonly cd = inject(ChangeDetectorRef);
  private readonly hostEl = inject(ElementRef);
  private readonly service = inject(TestService);

  public inputForClone = 'default';

  cdCheck() {
    console.log('check -')
    this.zone.runOutsideAngular(() => hightlight(this.hostEl))
    // hightlight(this.hostEl)
  }

  changeInput() {
    this.inputForClone = 'changed';
  }

  changeStreamValue() {
    this.service.observable = 'Observable value changed'
  }
}
