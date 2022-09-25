import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection$.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
// Access to XMLHttpRequest at 'localhost:3000/orders'
//  from origin 'http://localhost:4200' has been blocked by CORS
//   policy: Cross origin requests are only supported for protocol
//   schemes: http, data, chrome, chrome-extension, chrome-untrusted,
//   https, isolated-app.
