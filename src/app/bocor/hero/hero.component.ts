import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  title:string = 'Your new digital experience with Bocor';
  description:string = 'We are team of talented designers making websites with Bootstrap';
  buttonName:string = 'Get Started';
  imgUrl:string = 'assets/img/hero-img.png';

  constructor() { }

  ngOnInit(): void {
  }

}
