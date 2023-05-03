import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  title: string = 'Portfolio';
  description: string =
    'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.';


  portfolio:any[] = [
    {
      url:'assets/img/portfolio/portfolio-1.jpg',
      name:'App 1',
      type:'App'
    },
    {
      url:'assets/img/portfolio/portfolio-2.jpg',
      name:'Web 3',
      type:'Web'
    },
    {
      url:'assets/img/portfolio/portfolio-3.jpg',
      name:'App 2',
      type:'App'
    },
    {
      url:'assets/img/portfolio/portfolio-4.jpg',
      name:'Card 2',
      type:'Card'
    },
    {
      url:'assets/img/portfolio/portfolio-5.jpg',
      name:'Web 2',
      type:'Web'
    },
    {
      url:'assets/img/portfolio/portfolio-6.jpg',
      name:'App 3',
      type:'App'
    },
    {
      url:'assets/img/portfolio/portfolio-7.jpg',
      name:'Card 1',
      type:'Card'
    },
    {
      url:'assets/img/portfolio/portfolio-8.jpg',
      name:'Card 3',
      type:'Card'
    },
    {
      url:'assets/img/portfolio/portfolio-9.jpg',
      name:'Web 3',
      type:'Web'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
