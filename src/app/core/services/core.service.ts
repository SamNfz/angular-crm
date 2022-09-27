import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  // public obs = new Observable((listXsubscribe) => {
  //   listXsubscribe.next(Math.random());
  // });

  // public subj = new Subject();

  public subject = new BehaviorSubject(1); // 0 is the initial value
  // public numVersion: BehaviorSubject<number>;
  constructor() {
    // this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
    // this.subj.subscribe((data) => console.log('Data 1 : ' + data));
    // this.subj.next('test');
    // this.subj.next('test 2');
    // this.subj.subscribe((data) => console.log('Data 2 : ' + data));
    // this.subj.next(Math.random());
    // this.subj.subscribe((data) => console.log('Data 3 : ' + data));
    // this.subj.next(Math.random());
    // this.numVersion = new BehaviorSubject<number>(1);
  }
}
