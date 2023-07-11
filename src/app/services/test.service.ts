import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private readonly _subject = new BehaviorSubject('Observable value default');
  public observable$ = this._subject.asObservable();

  public set observable(value: any) {
    this._subject.next(value);
  }
}
