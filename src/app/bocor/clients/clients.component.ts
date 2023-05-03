import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: any[] = [
    { url: 'assets/img/clients/client-1.png', delay: '0' },
    { url: 'assets/img/clients/client-2.png', delay: '100' },
    { url: 'assets/img/clients/client-3.png', delay: '200' },
    { url: 'assets/img/clients/client-4.png', delay: '300' },
    { url: 'assets/img/clients/client-5.png', delay: '400' },
    { url: 'assets/img/clients/client-6.png', delay: '500' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
