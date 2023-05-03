import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  Title: string = 'Pricing';
  Description: string =
    'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.';

  pricing: any[] = [
    {
      category: 'Free',
      amount: '0',
      month: 'per month',
      checked: 'bx bx-check',
      unchecked: 'bx bx-x',
      list1: 'Quam adipiscing vitae proin',
      list2: 'Nec feugiat nisl pretium',
      list3: 'Nulla at volutpat diam uteera',
      list4: 'Pharetra massa massa ultricies',
      list5: 'Massa ultricies mi quis hendrerit',
      isFeatured: false,
    },
    {
      category: 'Business',
      amount: '29',
      month: 'per month',
      checked: 'bx bx-check',
      unchecked: 'bx bx-x',
      list1: 'Quam adipiscing vitae proin',
      list2: 'Nec feugiat nisl pretium',
      list3: 'Nulla at volutpat diam uteera',
      list4: 'Pharetra massa massa ultricies',
      list5: 'Massa ultricies mi quis hendrerit',
      isFeatured: true,
    },
    {
      category: 'Developer',
      amount: '49',
      month: 'per month',
      checked: 'bx bx-check',
      unchecked: 'bx bx-x',
      list1: 'Quam adipiscing vitae proin',
      list2: 'Nec feugiat nisl pretium',
      list3: 'Nulla at volutpat diam uteera',
      list4: 'Pharetra massa massa ultricies',
      list5: 'Massa ultricies mi quis hendrerit',
      isFeatured: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
