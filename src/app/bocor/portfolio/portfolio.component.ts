import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"],
})
export class PortfolioComponent implements OnInit {
  title: string = "Portfolio";
  description: string =
    "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
  list: any[] = [];

  category: any[] = [
    {
      categoryName: "app",
      data: [
        {
          aos:'filter-app',
          url: "assets/img/portfolio/portfolio-1.jpg",
          name: "App 1",
          type: "App",
        },
        {
          aos:'filter-app',
          url: "assets/img/portfolio/portfolio-3.jpg",
          name: "App 2",
          type: "App",
        },
        {
          aos:'filter-app',
          url: "assets/img/portfolio/portfolio-6.jpg",
          name: "App 3",
          type: "App",
        },
      ],
    },
    {
      categoryName: "card",
      data: [
        {
          aos:'filter-card',
          url: "assets/img/portfolio/portfolio-4.jpg",
          name: "Card 1",
          type: "Card",
        },
        {
          aos:'filter-card',
          url: "assets/img/portfolio/portfolio-7.jpg",
          name: "Card 2",
          type: "Card",
        },
        {
          aos:'filter-card',
          url: "assets/img/portfolio/portfolio-8.jpg",
          name: "Card 3",
          type: "Card",
        },
      ],
    },
    {
      categoryName: "web",
      data: [
        {
          aos:'filter-web',
          url: "assets/img/portfolio/portfolio-2.jpg",
          name: "Web 1",
          type: "Web",
        },
        {
          aos:'filter-web',
          url: "assets/img/portfolio/portfolio-5.jpg",
          name: "Web 2",
          type: "Web",
        },
        {
          aos:'filter-web',
          url: "assets/img/portfolio/portfolio-9.jpg",
          name: "Web 3",
          type: "Web",
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.allCategory();
  }

  allCategory(){
    this.list = [...this.category[0].data,...this.category[1].data,...this.category[2].data,];
    // console.log("jgdfjg",this.list);
  }

  portfolio(name:any){

    for(let i=0; i<this.category.length; i++){
      if(i == 0 || i == 1 || i == 2){
        if(this.category[i].categoryName === name){
            this.list = this.category[i].data;
        }
        else{
          continue;
        }
      }      
    }
    // this.category.find((element:any) => {
    //   if(element.categoryName === name){
    //     this.list = element.data;
    //   }
    //   console.log(this.list);
    // }) 
  }
}
