import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  title:string = 'Services';
  description:string = 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.';

  services:any[] = [
    {
      data_aos:'fade-right',
      url:'assets/img/services-1.jpg',
      title:'Temporibus laudantium',
      desc:'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      more: 'Read More',
      icon:'bi bi-arrow-right'
    },
    {
      data_aos:'fade-left',
      url:'assets/img/services-2.jpg',
      title:'Aperiores voluptates',
      desc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      more: 'Read More',
      icon:'bi bi-arrow-right'
    },
    {
      data_aos:'fade-right',
      url:'assets/img/services-3.jpg',
      title:'Veritatis natus nisi',
      desc:'Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      more: 'Read More',
      icon:'bi bi-arrow-right'
    },
    {
      data_aos:'fade-left',
      url:'assets/img/services-4.jpg',
      title:'Aliquam veritatis',
      desc:'Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil aut incidunt aut',
      more: 'Read More',
      icon:'bi bi-arrow-right'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
