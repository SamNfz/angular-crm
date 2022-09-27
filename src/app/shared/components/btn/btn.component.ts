import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit, OnChanges {
  // @Input() public !label: string;
  // @Input() public !link: string;

  constructor() {
    // this.label = 'bouton de test';
    // this.link = 'bouton de test';
  }

  ngOnChanges(): void {
    // console.log(this.label);
  }

  ngOnInit(): void {
    // console.log(this.label);
  }

  public changeLabel(): void {
    // this.label = 'label changed';
  }
}
