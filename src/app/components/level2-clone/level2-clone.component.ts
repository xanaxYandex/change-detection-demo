import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  Input, NgZone,
  OnChanges, OnInit, SimpleChanges
} from '@angular/core';
import {Level3Component} from '../level3/level3.component';
import {hightlight} from '../utils/highlight';
import {TestService} from '../../services/test.service';
import {AsyncPipe} from '@angular/common';
import {delay, tap} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-level2-clone',
  standalone: true,
  imports: [Level3Component, AsyncPipe],
  templateUrl: './level2-clone.component.html',
  styleUrls: ['./level2-clone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Level2CloneComponent implements OnChanges {
  private readonly zone = inject(NgZone);
  private readonly http = inject(HttpClient);
  private readonly hostEl = inject(ElementRef);
  private readonly cdRef = inject(ChangeDetectorRef);
  private readonly service = inject(TestService);

  @Input() input1: string | null = null;

  public stream$ = this.service.observable$.pipe(tap(console.log));

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  cdCheck() {
    console.log('check --c')
    this.zone.runOutsideAngular(() => hightlight(this.hostEl))
    // hightlight(this.hostEl)
  }

  triggerEvent() {
    console.log('event');
  }

  detectChanges() {
    this.cdRef.detectChanges();
  }

  markForCheck() {
    this.cdRef.markForCheck();
  }
}
