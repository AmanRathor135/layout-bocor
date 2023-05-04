import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: any[] = [
    { url: 'assets/img/clients/client-1.png'},
    { url: 'assets/img/clients/client-2.png'},
    { url: 'assets/img/clients/client-3.png'},
    { url: 'assets/img/clients/client-4.png'},
    { url: 'assets/img/clients/client-5.png'},
    { url: 'assets/img/clients/client-6.png'},
  ];

  constructor() {}

  ngOnInit(): void {}
}
