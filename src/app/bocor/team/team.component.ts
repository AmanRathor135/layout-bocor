import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  title: string = 'Team';
  description: string =
    'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.';

  team: any[] = [
    {
      url: 'assets/img/team/team-1.jpg',
      name: 'Walter White',
      job_title: 'Chief Executive Officer',
    },
    {
      url: 'assets/img/team/team-2.jpg',
      name: 'Sarah Jhinson',
      job_title: 'Product Manager',
    },
    {
      url: 'assets/img/team/team-3.jpg',
      name: 'William Anderson',
      job_title: 'CTO',
    },
    {
      url: 'assets/img/team/team-4.jpg',
      name: 'Amanda Jepson',
      job_title: 'Accountant',
    },
  ];

  socialLinks: any[] = [
    'bi bi-twitter',
    'bi bi-facebook',
    'bi bi-instagram',
    'bi bi-linkedin',
  ];

  constructor() {}

  ngOnInit(): void {}
}
