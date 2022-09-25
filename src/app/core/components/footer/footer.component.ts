import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public count: number = 0;

  constructor(private coreservice: CoreService) {
    this.coreservice.subject.subscribe((data) => {
      this.count = data;
    });
  }

  ngOnInit(): void {}
}
