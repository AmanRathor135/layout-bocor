import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title: string = "Contact";
  description: string =
    "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
  
    dataForm: any = {
      name:'',
      email:'',
      subject:'',
      address:''
    }
  contact:any[] = [
    {
      name:'Our Address',
      data:['A108 Adam Street, New York, NY 535022']
    },
    {
      name:'Email Us',
      data:['info@example.com','contact@example.com']
    },
    {
      name:'Call Us',
      data:['+1 5589 55488 55','+1 6678 254445 41']
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    console.log(this.dataForm);  
  }
}
