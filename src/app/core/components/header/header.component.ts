import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public count: number = 0;

  constructor(private coreservice: CoreService) {
    this.coreservice.subject.subscribe((data) => {
      this.count = data;
    });
  }

  public increase() {
    this.coreservice.subject.next(this.count + 1);
  }

  ngOnInit(): void {}
}
