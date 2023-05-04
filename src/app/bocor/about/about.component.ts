import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title:string = 'Voluptatem dignissimos provident quasi';
  description:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit';

  aboutUs:any[] = [
    {
      icon:'bx bx-receipt',
      title:'Corporis voluptates sit',
      desc:'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
      delay:'0'
    },
    {
      icon:'bx bx-cube-alt',
      title:'Ullamco laboris nisi',
      desc:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
      delay:'100'
    },
    {
      icon:'bx bx-images',
      title:'Labore consequatur',
      desc:'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere',
      delay:'200'
    },
    {
      icon:'bx bx-shield',
      title:'Beatae veritatis',
      desc:'Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta',
      delay:'300'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
