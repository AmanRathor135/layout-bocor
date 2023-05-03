import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbar:any[] = [
    {
      label:'Home',
      route:''
    },
    {
      label:'About Us',
      route:'about'
    },
    {
      label:'Services',
      route:'services'
    },
    {
      label:'Portfolio',
      route:'portfolio'
    },
    {
      label:'Team',
      route:'team'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
