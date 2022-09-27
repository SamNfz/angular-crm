import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss'],
})
export class TemplateContainerComponent implements OnInit, OnChanges {
  @Input() public title: string;

  constructor() {
    this.title = 'Ohhhhh le joli title';
  }

  ngOnChanges(): void {}

  ngOnInit(): void {}
}
