import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  title:string = 'Features';
  description:string = 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.'

  features:any[] = [
    {
      data_aos1:'fade-right',
      data_aos2:'fade-left',
      url:'assets/img/features-1.svg',
      title:'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      feature:['Ullamco laboris nisi ut aliquip ex ea commodo consequat.','Duis aute irure dolor in reprehenderit in voluptate velit.']
    },
    {
      data_aos1:'fade-left',
      data_aos2:'fade-right',
      url:'assets/img/features-2.svg',
      title:'Corporis temporibus maiores provident',
      desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      feature:[`Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum`]
    },
    {
      data_aos1:'fade-right',
      data_aos2:'fade-left',
      url:'assets/img/features-3.svg',
      title:'Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas', 
      desc:'Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.',
      feature:['Ullamco laboris nisi ut aliquip ex ea commodo consequat.','Duis aute irure dolor in reprehenderit in voluptate velit.','Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.']
    },
    {
      data_aos1:'fade-left',
      data_aos2:'fade-right',
      url:'assets/img/features-4.svg',
      title:'Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in',
      desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      feature:[`Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum`]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
